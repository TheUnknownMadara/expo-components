import { Stack } from 'expo-router';
import useFontsLoader from '@/hooks/useFontsLoader';
import { COLORS } from '../theme/colors';
import { useThemeStore } from '../hooks/useThemesStore';

export default function RootLayout() {
  const { fontsLoaded, fontsError } = useFontsLoader();
  const { scheme, mode } = useThemeStore();
  const colors = COLORS[scheme][mode];
  if (!fontsLoaded && !fontsError) {
    return null;
  }
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          statusBarBackgroundColor: colors.background,
          headerShown: false,
          headerBackVisible: false,
          navigationBarHidden: true
        }}
      />
    </Stack>
  );
}
