import { ColorSchemeName, StyleProp, StyleSheet } from 'react-native';
import { COLORS } from '@/theme/colors';
import { SIZES } from '@/theme/sizes';

export function AppScreenContainer(
  theme: ColorSchemeName,
  style : StyleProp<any> = {},
  padded? : boolean,
): StyleSheet.NamedStyles<any> {
  const _default: StyleProp<any> = {
    container: {
      flex: 1,
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      padding: padded ? SIZES.screens.padding : 0,
      gap: SIZES.screens.gap,
    },
  };

  switch (theme) {
    case 'dark':
      return StyleSheet.create({
        container: {
          ..._default.container,
          backgroundColor: COLORS.dark.background,
          ...style,
        },
      }).container;
    case 'light':
      return StyleSheet.create({
        container: {
          ..._default.container,
          backgroundColor: COLORS.light.background,
          ...style,
        },
      }).container;
    default:
      return StyleSheet.create({
        container: {
          ..._default.container,
          backgroundColor: COLORS.dark.background,
          ...style,
        },
      }).container;
  }
}
