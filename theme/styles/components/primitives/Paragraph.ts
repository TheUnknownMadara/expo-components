import { ColorSchemeName, StyleProp, StyleSheet } from "react-native";
import { COLORS } from "@/theme/colors";
import { SIZES } from "@/theme/sizes";


export function ParagraphStyle(
  theme: ColorSchemeName,
  style : StyleProp<any> = {}
) {
  const _default : StyleProp<any> = {
    text: {
      fontFamily: 'SpaceMono-Regular',
      fontSize: SIZES.text.fontSize.p,
      lineHeight: SIZES.text.lineHeight.p,
    },
  }

  switch (theme) {
    case 'dark':
      return StyleSheet.create({
        text: {
          ..._default.text,
          color: COLORS.dark.getText(),
          ...style,
        },
      }).text;
    case 'light':
      return StyleSheet.create({
        text: {
          ..._default.text,
          color: COLORS.light.getText(),
          ...style,
        },
      }).text;
    default:
      return StyleSheet.create({
        text: {
          ..._default.text,
          color: COLORS.dark.getText(),
          ...style,
        },
      }).text;
  }
}