import { MotiProps } from 'moti';
import { ColorSchemeName } from 'react-native';
import { COLORS } from '@/theme/colors';

export default function icon(theme: ColorSchemeName): MotiProps {
  switch (theme) {
    case 'dark':
      return {
        animate: {
          color: COLORS.dark.getText(),
        },
      };
    case 'light':
      return {
        animate: {
          color: COLORS.light.getText(),
        },
      };
    default:
      return {
        animate: {
          color: COLORS.dark.getText(),
        },
      };
  }
}

export function ButtonIcon(theme: ColorSchemeName): MotiProps {
  switch (theme) {
    case 'dark':
      return {
        animate: {
          color: COLORS.dark.background,
        },
      };
    case 'light':
      return {
        animate: {
          color: COLORS.light.background,
        },
      };
    default:
      return {
        animate: {
          color: COLORS.dark.background,
        },
      };
  }
}
