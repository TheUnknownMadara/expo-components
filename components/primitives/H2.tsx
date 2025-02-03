import React from 'react';
import { Text, TextProps } from 'react-native';
import { H2Style } from '../../theme/styles/components/primitives/H2';
import { useThemeStore } from '../../hooks/useThemesStore';

interface H2Props extends TextProps {
  children: React.ReactNode;
}

const H2: React.FC<H2Props> = ({ children, style, ...props }) => {
  const { scheme, mode } = useThemeStore();
  return (
    <Text
      selectable={true}
      accessibilityRole="text"
      {...props}
      style={H2Style({scheme, mode})}
    >
      {children}
    </Text>
  );
};

export default H2;