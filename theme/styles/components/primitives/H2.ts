import { StyleProp, StyleSheet } from "react-native";
import { COLORS } from "@/theme/colors";
import { SIZES } from "@/theme/sizes";
import { ThemeContext } from "../../../../hooks/useThemesStore";


export function H2Style(
  theme: ThemeContext,
  style: StyleProp<any> = {}
) {
  const colors = COLORS[theme.scheme][theme.mode];
  const _default : StyleProp<any> = {
    h2: {
      fontSize: SIZES.text.fontSize.h2,
      fontFamily: 'SpaceMono-Regular',
      lineHeight: SIZES.text.lineHeight.h2,
    },
  }

  return StyleSheet.create({
    h2: {
      ..._default.h2,
      color: colors.getText(),
      ...style,
    },
  }).h2;
}