import { MotiProps } from 'moti';
import { COLORS } from '@/theme/colors';
import { ThemeContext } from '../../../../hooks/useThemesStore';

export default function icon(  theme: ThemeContext): MotiProps {
  const colors = COLORS[theme.scheme][theme.mode];
  return {
    animate: {
      color: colors.getText(),
    },
  };
}

export function ButtonIcon(theme: ThemeContext): MotiProps {
  const colors = COLORS[theme.scheme][theme.mode];
  return {
    animate: {
      color: colors.background,
    },
  };
}
