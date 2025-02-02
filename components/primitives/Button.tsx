import {
  ButtonProps,
  Pressable,
  PressableProps,
  TextStyle,
  useColorScheme,
} from 'react-native';
import Paragraph from '@/components/primitives/Paragraph';
import {
  ButtonContainer,
  ButtonText,
} from '@/theme/styles/components/primitives/Button';

export type StyledButtonProps = PressableProps & {
  title?: string;
  textStyle?: TextStyle;
  children?: React.ReactNode;
};

export default function Button(props: StyledButtonProps) {
  const theme = useColorScheme();
  return (
    <Pressable {...props} style={ButtonContainer(theme, props.style)}>
      {props.title && (
        <Paragraph style={ButtonText(theme, props.textStyle)}>
          {props.title}
        </Paragraph>
      )}
      {props.children && props.children}
    </Pressable>
  );
}
