import { AppScreenContainer } from '@/theme/styles/components/compositions/AppScreen';
import { ScrollView } from 'moti';
import { ScrollViewProps } from 'react-native';
import { useThemeStore } from '../../hooks/useThemesStore';
import { COLORS } from '../../theme/colors';
import { ThemeInitializer } from '../../hooks/useThemeInitializer';
import { Platform } from 'react-native';

export type AppScreenProps = React.PropsWithChildren<ScrollViewProps> & {
  style?: ScrollViewProps['style'];
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
  const { scheme, mode } = useThemeStore();
  const themeColors = COLORS[scheme][mode];
  const isWeb = Platform.OS === 'web';

  return (
    <ScrollView
      {...props}
      scrollEnabled={true}
      style={{ backgroundColor: themeColors.background }}
      contentContainerStyle={[
        AppScreenContainer({ scheme, mode }, style, padded),
        { backgroundColor: themeColors.background },
        isWeb ? {
          maxWidth: '50%',
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto',
        } : {}
      ]}
    >
      <ThemeInitializer />
      {children}
    </ScrollView>
  );
}
