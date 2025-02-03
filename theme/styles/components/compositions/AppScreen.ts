import { StyleProp, StyleSheet } from 'react-native';
import { COLORS } from '@/theme/colors';
import { SIZES } from '@/theme/sizes';
import { ThemeContext } from '../../../../hooks/useThemesStore';

export function AppScreenContainer(
  theme: ThemeContext,
  style: StyleProp<any> = {},
  padded? : boolean,
): StyleSheet.NamedStyles<any> {
  
  const colors = COLORS[theme.scheme][theme.mode];

  const _default: StyleProp<any> = {
    container: {
      justifyContent: 'center',
      padding: padded ? SIZES.screens.padding : 0,
      gap: SIZES.screens.gap,
    },
  };

  return StyleSheet.create({
    container: {
      ..._default.container,
      backgroundColor: colors.background,
      ...style,
    },
  }).container;

}
