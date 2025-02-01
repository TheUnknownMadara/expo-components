import { Stack } from 'expo-router';
import useFontsLoader from '@/hooks/useFontsLoader';
import { useColorScheme } from 'react-native';
import { ToastProvider } from '@/contexts/toastContext';

export default function RootLayout() {
  const { fontsLoaded, fontsError } = useFontsLoader();
  const colorScheme = useColorScheme();
  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <ToastProvider>
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
    </ToastProvider>
  );
}
