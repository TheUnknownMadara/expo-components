// This file is intended to give as the maximum control of how whe control lights.
// There's no harded coded colors in any other file, and you should keep it that way.
// The colors and shades are calculated in real time based on the interaction of the colors
// described here. also, when we want to use this same interactions, but in components
// that cant overlap, we use this file to calculate the colors.

export type RGBA = { r: number; g: number; b: number; a: number };
type RGB = { r: number; g: number; b: number };

export function parseRGBAString(rgbaString: string): RGBA {
  const match = rgbaString.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
  if (!match) throw new Error('Invalid RGBA format');
  return {
    r: parseInt(match[1]),
    g: parseInt(match[2]),
    b: parseInt(match[3]),
    a: parseFloat(match[4]),
  };
}

export function parseRGBString(rgbString: string): RGB {
  const match = rgbString.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!match) throw new Error('Invalid RGB format');
  return {
    r: parseInt(match[1]),
    g: parseInt(match[2]),
    b: parseInt(match[3]),
  };
}

export function attenuateRGBA(
  rgbaString: string,
  backgroundRGBString: string
): string {
  const rgba: RGBA = parseRGBAString(rgbaString);
  const backgroundRGB: RGB = parseRGBString(backgroundRGBString);
  const { r: fr, g: fg, b: fb, a: fa } = rgba;
  const { r: br, g: bg, b: bb } = backgroundRGB;
  const r = Math.round(fr * fa + br * (1 - fa));
  const g = Math.round(fg * fa + bg * (1 - fa));
  const b = Math.round(fb * fa + bb * (1 - fa));
  return `rgb(${r},${g},${b})`;
}

function convertRGBToRGBA(rgbString: string, opacity: number): string {
  const rgb = parseRGBString(rgbString);
  if (opacity < 1 || opacity > 100)
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`;
  const alpha = opacity / 100;
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
}

export const COLORS = {
  dark: {
    background: 'rgb(43, 18, 37)',
    foreground: 'rgb(245, 204, 232)',
    getText() {
      return COLORS.dark.foreground;
    },
    primary: '#007AFF',
    status: {
      success: '#28a745',
      error: '#dc3545',
      warning: '#ffc107',
      epic: '#6f42c1',
    },
    buttons: {
      getBackground() {
        return COLORS.dark.foreground;
      },
      getText() {
        return COLORS.dark.background;
      },
    },
    surface: {
      unresolved: {
        getColor() {
          return COLORS.dark.foreground;
        },
        getSurface5() {
          return convertRGBToRGBA(COLORS.dark.surface.unresolved.getColor(), 5);
        },
        getSurface7() {
          return convertRGBToRGBA(COLORS.dark.surface.unresolved.getColor(), 7);
        },
        getSurface8() {
          return convertRGBToRGBA(COLORS.dark.surface.unresolved.getColor(), 8);
        },
        getSurface11() {
          return convertRGBToRGBA(COLORS.dark.surface.unresolved.getColor(), 11);
        },
        getSurface12() {
          return convertRGBToRGBA(COLORS.dark.surface.unresolved.getColor(), 12);
        },
        getSurface14() {
          return convertRGBToRGBA(COLORS.dark.surface.unresolved.getColor(), 14);
        },
        getSurface15() {
          return convertRGBToRGBA(COLORS.dark.surface.unresolved.getColor(), 15);
        },
        getSurface16() {
          return convertRGBToRGBA(COLORS.dark.surface.unresolved.getColor(), 16);
        },
      },
      get surface5() {
        return attenuateRGBA(
          COLORS.dark.surface.unresolved.getSurface5(),
          COLORS.dark.background
        );
      },
      get surface7() {
        return attenuateRGBA(
          COLORS.dark.surface.unresolved.getSurface7(),
          COLORS.dark.background
        );
      },
      get surface8() {
        return attenuateRGBA(
          COLORS.dark.surface.unresolved.getSurface8(),
          COLORS.dark.background
        );
      },
      get surface11() {
        return attenuateRGBA(
          COLORS.dark.surface.unresolved.getSurface11(),
          COLORS.dark.background
        );
      },
      get surface12() {
        return attenuateRGBA(
          COLORS.dark.surface.unresolved.getSurface12(),
          COLORS.dark.background
        );
      },
      get surface14() {
        return attenuateRGBA(
          COLORS.dark.surface.unresolved.getSurface14(),
          COLORS.dark.background
        );
      },
      get surface15() {
        return attenuateRGBA(
          COLORS.dark.surface.unresolved.getSurface15(),
          COLORS.dark.background
        );
      },
      get surface16() {
        return attenuateRGBA(
          COLORS.dark.surface.unresolved.getSurface16(),
          COLORS.dark.background
        );
      },
    },
  },
  light: {
    getText() {
      return COLORS.light.foreground;
    },
    background: 'rgb(245, 204, 232)',
    foreground: 'rgb(43, 18, 37)',
    primary: '#007AFF',
    status: {
      success: '#28a745',
      error: '#dc3545',
      warning: '#ffc107',
      epic: '#6f42c1',
    },
    buttons: {
      getBackground() {
        return COLORS.light.foreground;
      },
      getText() {
        return COLORS.light.background;
      },
      getIcon() {
        return COLORS.light.background;
      },
    },
    surface: {
      unresolved: {
        color: 'rgb(43, 18, 37)',
        surface5: 'rgba(43, 18, 37, 0.05)',
        surface7: 'rgba(43, 18, 37, 0.07)',
        surface8: 'rgba(43, 18, 37, 0.08)',
        surface9: 'rgba(43, 18, 37, 0.09)',
        surface11: 'rgba(43, 18, 37, 0.11)',
        surface12: 'rgba(43, 18, 37, 0.12)',
        surface14: 'rgba(43, 18, 37, 0.14)',
        surface15: 'rgba(43, 18, 37, 0.15)',
        surface16: 'rgba(43, 18, 37, 0.16)',
        surface32: 'rgba(43, 18, 37, 0.32)',
        surface50: 'rgba(43, 18, 37, 0.5)',
        surface80: 'rgba(43, 18, 37, 0.8)',
      },
      get surface5() {
        return attenuateRGBA(
          COLORS.light.surface.unresolved.surface5,
          COLORS.light.background
        );
      },
      get surface7() {
        return attenuateRGBA(
          COLORS.light.surface.unresolved.surface7,
          COLORS.light.background
        );
      },
      get surface8() {
        return attenuateRGBA(
          COLORS.light.surface.unresolved.surface8,
          COLORS.light.background
        );
      },
      get surface9() {
        return attenuateRGBA(
          COLORS.light.surface.unresolved.surface9,
          COLORS.light.background
        );
      },
      get surface11() {
        return attenuateRGBA(
          COLORS.light.surface.unresolved.surface11,
          COLORS.light.background
        );
      },
      get surface12() {
        return attenuateRGBA(
          COLORS.light.surface.unresolved.surface12,
          COLORS.light.background
        );
      },
      get surface14() {
        return attenuateRGBA(
          COLORS.light.surface.unresolved.surface14,
          COLORS.light.background
        );
      },
      get surface15() {
        return attenuateRGBA(
          COLORS.light.surface.unresolved.surface15,
          COLORS.light.background
        );
      },
      get surface16() {
        return attenuateRGBA(
          COLORS.light.surface.unresolved.surface16,
          COLORS.light.background
        );
      },
      get surface32() {
        return attenuateRGBA(
          COLORS.light.surface.unresolved.surface32,
          COLORS.light.background
        );
      },
      get surface50() {
        return attenuateRGBA(
          COLORS.light.surface.unresolved.surface50,
          COLORS.light.background
        );
      },
      get surface80() {
        return attenuateRGBA(
          COLORS.light.surface.unresolved.surface80,
          COLORS.light.background
        );
      },
    },
  },
};
