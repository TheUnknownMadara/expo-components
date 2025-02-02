import React from 'react';
import { Text, TextProps, useColorScheme } from 'react-native';
import { ParagraphStyle } from '@/theme/styles/components/primitives/Paragraph';

export type ParagraphProps = TextProps;

const Paragraph: React.FC<TextProps> = ({ children, ...props }) => {
  const colorScheme = useColorScheme();
  return (
    <Text
      selectable={true}
      accessibilityRole="text"
      {...props}
      style={ParagraphStyle(colorScheme, props.style)}
    >
      {children}
    </Text>
  );
};

export default Paragraph;