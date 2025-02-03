import {
  Pressable,
  PressableProps,
  TextStyle,
} from 'react-native';
import Paragraph from '@/components/primitives/Paragraph';
import {
  ButtonContainer,
  ButtonText,
} from '@/theme/styles/components/primitives/Button';
import { useThemeStore } from '../../hooks/useThemesStore';

export type StyledButtonProps = PressableProps & {
  title?: string;
  textStyle?: TextStyle;
  children?: React.ReactNode;
};

export default function Button(props: StyledButtonProps) {
  const { scheme, mode } = useThemeStore();

  return (
    <Pressable {...props} style={ButtonContainer({scheme, mode}, props.style)}>
      {props.title && (
        <Paragraph style={ButtonText({scheme, mode}, props.textStyle)}>
          {props.title}
        </Paragraph>
      )}
      {props.children && props.children}
    </Pressable>
  );
}
