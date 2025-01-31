import { Stack } from 'expo-router';
import useFontsLoader from '@/hooks/useFontsLoader';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const { fontsLoaded, fontsError } = useFontsLoader();
  const colorScheme = useColorScheme();
  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="(tabs)"
            options={{
              statusBarBackgroundColor: 'transparent',
              headerShown: false,
              headerBackVisible: false,
              statusBarTranslucent: true,
              statusBarStyle: colorScheme === 'dark' ? 'light' : 'dark',
              navigationBarHidden: true,
            }}
          />
        </Stack>
  );
}
