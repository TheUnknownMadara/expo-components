import { StyleProp, StyleSheet } from "react-native";
import { COLORS } from "@/theme/colors";
import { SIZES } from "@/theme/sizes";
import { ThemeContext } from "../../../../hooks/useThemesStore";


export function ParagraphStyle(
  theme: ThemeContext,
  style: StyleProp<any> = {}
) {
  const colors = COLORS[theme.scheme][theme.mode];
  const _default : StyleProp<any> = {
    text: {
      fontFamily: 'CourierPrime_400Regular',
      fontSize: SIZES.text.fontSize.p,
      lineHeight: SIZES.text.lineHeight.p,
    },
  }

  return StyleSheet.create({
    text: {
      ..._default.text,
      color: colors.getText(),
      ...style,
    },
  }).text;
}