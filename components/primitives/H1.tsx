import React from 'react';
import { Text, TextProps } from 'react-native';
import { H1Style } from '../../theme/styles/components/primitives/H1';
import { useThemeStore } from '../../hooks/useThemesStore';

interface H1Props extends TextProps {
  children: React.ReactNode;
}

const H1: React.FC<H1Props> = ({ children, style, ...props }) => {
  const { scheme, mode } = useThemeStore();
  return (
    <Text
      selectable={true}
      accessibilityRole="header"
      style={H1Style({scheme, mode})}
      {...props}
    >
      {children}
    </Text>
  );
};

export default H1;