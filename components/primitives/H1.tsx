import React from 'react';
import { Text, StyleSheet, TextProps, useColorScheme } from 'react-native';
import { COLORS } from '@/theme/colors';
import { SIZES } from '@/theme/sizes';

interface H1Props extends TextProps {}

const H1: React.FC<H1Props> = ({ children, style, ...props }) => {
  const colorScheme = useColorScheme();
  return (
    <Text
      accessibilityRole="header"
      style={[colorScheme === 'dark' ? styles.dark : styles.light, style]}
      {...props}
    >
      {children}
    </Text>
  );
};

const h1 = StyleSheet.create({
  h1: {
    fontSize: SIZES.text.fontSize.h1,
    fontFamily: 'SpaceMono-Bold',
    lineHeight: SIZES.text.lineHeight.h1,
  },
});

const styles = StyleSheet.create({
  dark: {
    color: COLORS.dark.text,
    ...h1.h1,
  },
  light: {
    color: COLORS.light.text,
    ...h1.h1,
  }
});

export default H1;