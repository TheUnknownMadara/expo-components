import { create } from 'zustand';
import { Appearance } from 'react-native';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLOR_PAIRS } from '../theme/colors';

type ColorPair = keyof typeof COLOR_PAIRS;
type Mode = 'dark' | 'light';

export type ThemeContext = {
  scheme: ColorPair;
  mode: Mode;
};


export interface ThemeState {
  scheme: ColorPair;
  mode: Mode;
  usingSystemDefault: boolean;
  setScheme: (scheme: ColorPair) => void;
  setMode: (mode: Mode | 'system') => void;
  initializeTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      scheme: 'default',
      mode: 'dark',
      usingSystemDefault: true,

      setScheme: (scheme) => set({ scheme }),

      setMode: (mode) => {
        if (mode === 'system') {
          const systemMode = Appearance.getColorScheme() || 'dark';
          set({ mode: systemMode, usingSystemDefault: true });
        } else {
          set({ mode, usingSystemDefault: false });
        }
      },

      initializeTheme: () => {
        const systemMode = Appearance.getColorScheme() || 'dark';
        set({ mode: systemMode, usingSystemDefault: true });

        Appearance.addChangeListener(({ colorScheme }) => {
          if (get().usingSystemDefault && colorScheme) {
            set({ mode: colorScheme });
          }
        });
      },
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);