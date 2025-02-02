import { Stack } from 'expo-router';
import useFontsLoader from '@/hooks/useFontsLoader';
import { COLORS } from '../theme/colors';

export default function RootLayout() {
  const { fontsLoaded, fontsError } = useFontsLoader();
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
          statusBarBackgroundColor: COLORS.dark.background,
          headerShown: false,
          headerBackVisible: false,
          navigationBarHidden: true
        }}
      />
    </Stack>
  );
}
