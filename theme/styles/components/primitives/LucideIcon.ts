import { MotiProps } from 'moti';
import { ColorSchemeName } from 'react-native';
import { COLORS } from '@/theme/colors';

export default function icon(theme: ColorSchemeName): MotiProps {
  switch (theme) {
    case 'dark':
      return {
        animate: {
          color: COLORS.dark.text,
        },
      };
    case 'light':
      return {
        animate: {
          color: COLORS.light.text,
        },
      };
    default:
      return {
        animate: {
          color: COLORS.dark.text,
        },
      };
  }
}