import React from 'react';
import { Text, StyleSheet, TextProps, useColorScheme } from 'react-native';
import { COLORS } from '@/theme/colors';
import { SIZES } from '@/theme/sizes';

interface H2Props extends TextProps {}

const H2: React.FC<H2Props> = ({ children, style, ...props }) => {
  const colorScheme = useColorScheme();
  return (
    <Text
      accessibilityRole="text"
      style={[colorScheme === 'dark' ? styles.dark : styles.light, style]}
      {...props}
    >
      {children}
    </Text>
  );
};

const h2 = StyleSheet.create({
  h2: {
    fontSize: SIZES.text.fontSize.h2,
    fontFamily: 'SpaceMono-Regular',
    lineHeight: SIZES.text.lineHeight.h2,
  },
});

const styles = StyleSheet.create({
  dark: {
    color: COLORS.dark.text,
    ...h2.h2,
  },
  light: {
    color: COLORS.light.text,
    ...h2.h2,
  }
});

export default H2;