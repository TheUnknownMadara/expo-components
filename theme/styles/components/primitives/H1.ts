import { StyleProp, StyleSheet } from "react-native";
import { COLORS } from "@/theme/colors";
import { SIZES } from "@/theme/sizes";
import { ThemeContext } from "../../../../hooks/useThemesStore"; 

export function H1Style(
  theme: ThemeContext,
  style: StyleProp<any> = {}
) {
  const colors = COLORS[theme.scheme][theme.mode];
  
  return StyleSheet.create({
    h1: {
      fontSize: SIZES.text.fontSize.h1,
      fontFamily: 'Metropolis-Black',
      lineHeight: SIZES.text.lineHeight.h1,
      color: colors.getText(),
      ...style,
    },
  }).h1;
}