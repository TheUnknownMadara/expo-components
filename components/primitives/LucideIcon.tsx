import { icons } from 'lucide-react-native';
import { motifySvg } from 'moti/svg';
import { MotiProps } from 'moti';

type IconNames = keyof typeof icons;

type AnimateProps = {
  [key: string]: AnimateProps;
};

type IconProp = {
  name: IconNames;
  size?: number;
} & MotiProps;

export default function LucideIcon({ size = 16, name, ...rest }: IconProp) {
  const IconComponent = motifySvg(icons[name] as any)();
  return <IconComponent size={size} {...rest} />;
}