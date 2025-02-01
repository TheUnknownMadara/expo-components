import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { FONTS } from '@/theme/fonts';
import { GOOGLE_FONTS } from '@/theme/fonts';

export default function useFontsLoader() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [fontsError, setFontsError] = useState<Error | null>(null);

  const [fontsLoadedExpo, fontsErrorExpo] = useFonts({
    ...FONTS,
    ...GOOGLE_FONTS,
  });

  useEffect(() => {
    if (fontsLoadedExpo || fontsErrorExpo) {
      setFontsLoaded(fontsLoadedExpo);
      setFontsError(fontsErrorExpo);
      SplashScreen.hideAsync();
    }
  }, [fontsLoadedExpo, fontsErrorExpo]);

  return { fontsLoaded, fontsError };
}
