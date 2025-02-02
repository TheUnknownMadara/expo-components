import React from 'react';
import { Text, TextProps, useColorScheme } from 'react-native';
import { H2Style } from '../../theme/styles/components/primitives/H2';

interface H2Props extends TextProps {}

const H2: React.FC<H2Props> = ({ children, style, ...props }) => {
  const colorScheme = useColorScheme();
  return (
    <Text
      selectable={true}
      accessibilityRole="text"
      {...props}
      style={H2Style(colorScheme, style)}
    >
      {children}
    </Text>
  );
};

export default H2;