import { ColorSchemeName, StyleProp, StyleSheet } from "react-native";
import { COLORS } from "@/theme/colors";
import { SIZES } from "@/theme/sizes";


export function H2Style(
  theme: ColorSchemeName,
  style : StyleProp<any> = {}
) {
  const _default : StyleProp<any> = {
    h2: {
      fontSize: SIZES.text.fontSize.h2,
      fontFamily: 'SpaceMono-Regular',
      lineHeight: SIZES.text.lineHeight.h2,
    },
  }

  switch (theme) {
    case 'dark':
      return StyleSheet.create({
        h2: {
          ..._default.h2,
          color: COLORS.dark.getText(),
          ...style,
        },
      }).h2;
    case 'light':
      return StyleSheet.create({
        h2: {
          ..._default.h2,
          color: COLORS.light.getText(),
          ...style,
        },
      }).h2;
    default:
      return StyleSheet.create({
        h2: {
          ..._default.h2,
          color: COLORS.dark.getText(),
          ...style,
        },
      }).h2;
  }
}