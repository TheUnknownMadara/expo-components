import { COLORS } from "@/theme/colors";
import { SIZES } from "../../../sizes";
import { ThemeContext } from "../../../../hooks/useThemesStore";
import { StyleProp, StyleSheet } from "react-native";

export function ButtonContainer(
  theme: ThemeContext,
  style: StyleProp<any> = {}
) {
  const colors = COLORS[theme.scheme][theme.mode];
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
      boxShadow: `0 8px 32px 0 ${colors.surface.unresolved.getSurface30()}`,
      width: 'auto',
    },
  }

  return StyleSheet.create({
    container: {
      ..._default.container,
      backgroundColor: colors.surface.unresolved.getSurface50(),
      borderColor: colors.surface.unresolved.getSurface50(),
      ...style,
    },
  }).container;
}

export function ButtonText(
  theme: ThemeContext,
  style: StyleProp<any> = {}
) {
  const colors = COLORS[theme.scheme][theme.mode];
  
  const _default : StyleProp<any> = {
    text: {
      fontFamily: 'SpaceMono-Regular',
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