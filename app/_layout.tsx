import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          statusBarBackgroundColor: 'black',
          headerShown: false,
          headerBackVisible: false,
          statusBarTranslucent: true,
          statusBarStyle: 'light',
          navigationBarHidden: true,
        }}
      />
    </Stack>
  );
}