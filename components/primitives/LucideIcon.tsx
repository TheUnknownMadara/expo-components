import { icons } from 'lucide-react-native';
import { motifySvg } from 'moti/svg';
import { MotiProps } from 'moti';
import icon from '@/theme/styles/components/primitives/LucideIcon';
import { useThemeStore } from '../../hooks/useThemesStore';

export type IconNames = keyof typeof icons;

type IconProp = {
  name: IconNames;
  size?: number;
} & MotiProps;

export default function LucideIcon({ size = 16, name, ...rest }: IconProp) {
  const { scheme, mode } = useThemeStore();
  // eslint-disable-next-line import/namespace
  const IconComponent = motifySvg(icons[name] as any)();
  return <IconComponent size={size} {...icon({scheme, mode})} {...rest} />;
}