import React from 'react';
import { Text, TextProps } from 'react-native';
import { ParagraphStyle } from '@/theme/styles/components/primitives/Paragraph';
import { useThemeStore } from '../../hooks/useThemesStore';

export type ParagraphProps = TextProps;

const Paragraph: React.FC<TextProps> = ({ children, ...props }) => {
  const { scheme, mode } = useThemeStore();
  return (
    <Text
      selectable={true}
      accessibilityRole="text"
      {...props}
      style={ParagraphStyle({scheme, mode}, props.style)}
    >
      {children}
    </Text>
  );
};

export default Paragraph;