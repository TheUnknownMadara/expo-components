// This file is intended to give as the maximum control of how whe control lights.
// There's no hardcoded colors in any other file, and you should keep it that way.
// The colors and shades are calculated in real time based on the interaction of the colors
// described here. also, when we want to use this same interactions, but in components
// that cant overlap, we use this file to calculate the colors. Because of the functions
// being pure, we can benefit from memoization.

type MemoizableFunction = (...args: any[]) => any;

function memoize<T extends MemoizableFunction>(fn: T): T {
  const cache = new Map<string, ReturnType<T>>();
  
  return ((...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key)!;
    
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

export type RGBA = { r: number; g: number; b: number; a: number };
type RGB = { r: number; g: number; b: number };

type ThemeConfig = {
  foreground: string;
  background: string;
  primary: string;
};

const SURFACE_OPACITIES = [5, 7, 8, 11, 12, 14, 15, 16, 20, 30, 40, 50] as const;

function createSurface(foreground: string, background: string) {
  const createUnresolvedSurface = (color: string) => ({
    getColor: () => color,
    ...Object.fromEntries(
      SURFACE_OPACITIES.map(opacity => [
        `getSurface${opacity}`,
        () => convertRGBToRGBA(color, opacity)
      ])
    ) as { [K in `getSurface${typeof SURFACE_OPACITIES[number]}`]: () => string }
  });

  const unresolved = createUnresolvedSurface(foreground);

  const createAttenuatedSurface = (opacity: typeof SURFACE_OPACITIES[number]) => 
    attenuateRGBA(unresolved[`getSurface${opacity}`](), background);

  const surface = Object.fromEntries(
    SURFACE_OPACITIES.map(opacity => [
      `surface${opacity}`,
      { get: () => createAttenuatedSurface(opacity) }
    ])
  );

  return { unresolved, ...surface };
}

function createTheme(config: ThemeConfig) {
  const getText = memoize(() => config.foreground);
  
  return {
    ...config,
    getText,
    get text() { return getText() }, // Property accessor using memoized method
    
    status: {
      success: '#28a745',
      error: '#dc3545',
      warning: '#ffc107',
      epic: '#6f42c1',
    },
    
    buttons: {
      getBackground: memoize(() => config.foreground),
      getText: memoize(() => config.background),
      getIcon: memoize(() => config.background),
    },
    
    surface: createSurface(config.foreground, config.background)
  };
}

const convertRGBToRGBA = memoize((
  rgbString: string,
  opacity: number
): string => {
  const rgb = parseRGBString(rgbString);
  const clampedOpacity = Math.min(100, Math.max(0, opacity));
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${clampedOpacity / 100})`;
});


export const parseRGBAString = memoize((rgbaString: string): RGBA => {
  const match = rgbaString.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
  if (!match) throw new Error('Invalid RGBA format');
  return {
    r: parseInt(match[1]),
    g: parseInt(match[2]),
    b: parseInt(match[3]),
    a: parseFloat(match[4]),
  };
});

export const parseRGBString = memoize((rgbString: string): RGB => {
  const match = rgbString.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!match) throw new Error('Invalid RGB format');
  return {
    r: parseInt(match[1]),
    g: parseInt(match[2]),
    b: parseInt(match[3]),
  };
});

export const attenuateRGBA = memoize((
  rgbaString: string,
  backgroundRGBString: string
): string => {
  const rgba = parseRGBAString(rgbaString);
  const backgroundRGB = parseRGBString(backgroundRGBString);
  const { r: fr, g: fg, b: fb, a: fa } = rgba;
  const { r: br, g: bg, b: bb } = backgroundRGB;
  const r = Math.round(fr * fa + br * (1 - fa));
  const g = Math.round(fg * fa + bg * (1 - fa));
  const b = Math.round(fb * fa + bb * (1 - fa));
  return `rgb(${r},${g},${b})`;
});

type ColorPair = {
  light: string;
  dark: string;
  primary: string;
};

export const COLOR_PAIRS = {
  default: {
    light: 'rgb(242, 245, 248)',
    dark: 'rgb(7, 10, 13)',
    primary: '#007AFF'
  },
  greenValley: {
    light: 'rgb(220, 245, 220)',
    dark: 'rgb(12, 35, 20)',
    primary: '#2ECC40'
  },
  blueSea: {
    light: 'rgb(200, 225, 255)',
    dark: 'rgb(10, 25, 50)',
    primary: '#0074D9'
  },
  CherryOre: {
    light: 'rgb(255, 215, 220)',
    dark: 'rgb(40, 10, 15)',
    primary: '#FF3860'
  }
} as const;

const createThemeVariants = memoize((pair: ColorPair) => {
  return {
    dark: createTheme({
      background: pair.dark,
      foreground: pair.light,
      primary: pair.primary
    }),
    light: createTheme({
      background: pair.light,
      foreground: pair.dark,
      primary: pair.primary
    })
  };
});

export const COLORS = Object.fromEntries(
  Object.entries(COLOR_PAIRS).map(([name, pair]) => [
    name,
    createThemeVariants(pair)
  ])
) as {
  [K in keyof typeof COLOR_PAIRS]: {
    dark: ReturnType<typeof createTheme>;
    light: ReturnType<typeof createTheme>;
  };
};