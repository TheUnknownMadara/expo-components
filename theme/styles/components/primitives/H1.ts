import { ColorSchemeName, StyleProp, StyleSheet } from "react-native";
import { COLORS } from "@/theme/colors";
import { SIZES } from "@/theme/sizes";


export function H1Style(
  theme: ColorSchemeName,
  style : StyleProp<any> = {}
) {
  const _default : StyleProp<any> = {
    h1: {
      fontSize: SIZES.text.fontSize.h1,
      fontFamily: 'RobotoMono_700Bold',
      lineHeight: SIZES.text.lineHeight.h1,
    },
  }

  switch (theme) {
    case 'dark':
      return StyleSheet.create({
        h1: {
          ..._default.h1,
          color: COLORS.dark.getText(),
          ...style,
        },
      }).h1;
    case 'light':
      return StyleSheet.create({
        h1: {
          ..._default.h1,
          color: COLORS.light.getText(),
          ...style,
        },
      }).h1;
    default:
      return StyleSheet.create({
        h1: {
          ..._default.h1,
          color: COLORS.dark.getText(),
          ...style,
        },
      }).h1;
  }
}