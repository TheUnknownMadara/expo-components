import { ColorSchemeName, StyleProp, StyleSheet } from "react-native";
import { COLORS } from "@/theme/colors";
import { SIZES } from "../../../sizes";

export function ButtonContainer(
  theme: ColorSchemeName,
  style : StyleProp<any> = {}
) {
  const _default : StyleProp<any> = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: SIZES.buttons.padding,
      gap: SIZES.buttons.gap,
      borderRadius: SIZES.buttons.radius,
      borderWidth: SIZES.cards.border,
    },
  }

  switch (theme) {
    case 'dark':
      return StyleSheet.create({
        container: {
          ..._default.container,
          backgroundColor: COLORS.dark.buttons.getBackground(),
          boxShadow: `0 8px 32px 0 ${COLORS.dark.surface.unresolved.getSurface30()}`,
          ...style,
        },
      }).container;
    case 'light':
      return StyleSheet.create({
        container: {
          ..._default.container,
          backgroundColor: COLORS.light.buttons.getBackground(),
          boxShadow: `0 8px 32px 0 ${COLORS.light.surface.unresolved.getSurface30()}`,
          ...style,
        },
      }).container;
    default:
      return StyleSheet.create({
        container: {
          ..._default.container,
          backgroundColor: COLORS.dark.buttons.getBackground(),
          ...style,
        },
      }).container;
  }
}

export function ButtonText(
  theme: ColorSchemeName,
  style : StyleProp<any> = {}
) {
  const _default : StyleProp<any> = {
    text: {
      fontFamily: 'SpaceMono-Regular',
    },
  }

  switch (theme) {
    case 'dark':
      return StyleSheet.create({
        text: {
          ..._default.text,
          color: COLORS.dark.buttons.getText(),
          ...style,
        },
      }).text;
    case 'light':
      return StyleSheet.create({
        text: {
          ..._default.text,
          color: COLORS.light.buttons.getText(),
          ...style,
        },
      }).text;
    default:
      return StyleSheet.create({
        text: {
          ..._default.text,
          color: COLORS.dark.buttons.getText(),
          ...style,
        },
      }).text;
  }
}