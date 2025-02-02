import React from 'react';
import { Text, TextProps, useColorScheme } from 'react-native';
import { H1Style } from '../../theme/styles/components/primitives/H1';

interface H1Props extends TextProps {}

const H1: React.FC<H1Props> = ({ children, style, ...props }) => {
  const colorScheme = useColorScheme();
  return (
    <Text
      selectable={true}
      accessibilityRole="header"
      style={H1Style(colorScheme, style)}
      {...props}
    >
      {children}
    </Text>
  );
};

export default H1;