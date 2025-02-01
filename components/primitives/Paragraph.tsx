import React from 'react';
import { Text, StyleSheet, TextProps, useColorScheme } from 'react-native';
import { COLORS } from '@/theme/colors';
import { SIZES } from '@/theme/sizes';

const Paragraph: React.FC<TextProps> = ({ children, style, ...props }) => {
  const colorScheme = useColorScheme();
  return (
    <Text
      selectable={true}
      accessibilityRole="text"
      style={[colorScheme === 'dark' ? styles.dark : styles.light, style]}
      {...props}
    >
      {children}
    </Text>
  );
};

const p = StyleSheet.create({
  p: {
    fontSize: SIZES.text.fontSize.p,
    fontFamily: 'SpaceMono-Regular',
    lineHeight: SIZES.text.lineHeight.p,
  },
});

const styles = StyleSheet.create({
  dark: {
    color: COLORS.dark.text,
    ...p.p,
  },
  light: {
    color: COLORS.light.text,
    ...p.p,
  }
});

export default Paragraph;