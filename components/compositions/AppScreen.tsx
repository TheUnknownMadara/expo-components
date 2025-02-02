import { AppScreenContainer } from '@/theme/styles/components/compositions/AppScreen';
import { SafeAreaView } from 'moti';
import { useColorScheme } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';

export type AppScreenProps = React.PropsWithChildren<SafeAreaViewProps> & {
  style?: SafeAreaViewProps['style'];
  padded?: boolean;
};

export default function AppScreen(
  {
    children,
    style,
    padded = true,
    ...props
  }: AppScreenProps,
) {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView
      {...props}
      style={AppScreenContainer(colorScheme, style, padded)}
    >
      {children}
    </SafeAreaView>
  );
}
