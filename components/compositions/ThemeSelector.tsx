import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useThemeStore } from '../../hooks/useThemesStore';
import { COLORS } from '@/theme/colors';
import { SIZES } from '../../theme/sizes';
import Paragraph from '../primitives/Paragraph';
import Button from '../primitives/Button';

export const ThemeSelector = () => {
  const { usingSystemDefault, scheme, mode } = useThemeStore();
  const { setScheme, setMode } = useThemeStore();
  const currentColors = COLORS[scheme][mode];
  const surfaceColor = currentColors.surface.unresolved.getSurface8();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: surfaceColor,
          borderColor: currentColors.surface.unresolved.getSurface50(),
          borderWidth: SIZES.cards.border,
        },
      ]}
    >
      <Text style={[styles.title, { color: currentColors.getText() }]}>
        Theme Settings
      </Text>
      {/* Color Scheme Selection */}
      <View style={styles.section}>
        <Text
          style={[styles.sectionTitle, { color: currentColors.foreground }]}
        >
          Color Scheme
        </Text>
        <View style={styles.grid}>
          {Object.keys(COLORS).map((colorScheme) => {
            const schemeColors = COLORS[colorScheme as keyof typeof COLORS];
            const lightColor = schemeColors.light.background;
            const darkColor = schemeColors.dark.background;

            return (
              <TouchableOpacity
                key={colorScheme}
                style={[
                  styles.schemeCircleContainer,
                  {
                    borderColor:
                      scheme === colorScheme
                        ? currentColors.foreground
                        : 'transparent',
                  },
                ]}
                onPress={() => setScheme(colorScheme as keyof typeof COLORS)}
              >
                <View style={styles.splitCircle}>
                  <View
                    style={[
                      styles.circleHalf,
                      styles.leftHalf,
                      { backgroundColor: lightColor },
                    ]}
                  />
                  <View
                    style={[
                      styles.circleHalf,
                      styles.rightHalf,
                      { backgroundColor: darkColor },
                    ]}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={styles.section}>
        <Text
          style={[styles.sectionTitle, { color: currentColors.foreground }]}
        >
          Dark/Light Mode
        </Text>
        <TouchableOpacity
          style={[
            styles.systemButton,
            {
              backgroundColor: currentColors.surface.unresolved.getSurface20(),
              borderColor: usingSystemDefault
                ? currentColors.foreground
                : 'transparent',
            },
          ]}
          onPress={() => setMode('system')}
        >
          <View style={styles.systemIndicator}>
            <View
              style={[
                styles.systemHalf,
                { backgroundColor: currentColors.background },
              ]}
            />
            <View
              style={[
                styles.systemHalf,
                { backgroundColor: currentColors.foreground },
              ]}
            />
          </View>
          <Text style={{ color: currentColors.getText() }}>
            Use System Theme
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <View style={styles.modeContainer}>
          <TouchableOpacity
            style={[
              styles.modeButton,
              mode === 'dark' && !usingSystemDefault && styles.activeMode,
              {
                backgroundColor:
                  currentColors.surface.unresolved.getSurface20(),
              },
            ]}
            onPress={() => setMode('dark')}
          >
            <Paragraph>
              Dark
            </Paragraph>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.modeButton,
              mode === 'light' && !usingSystemDefault && styles.activeMode,
              {
                backgroundColor:
                  currentColors.surface.unresolved.getSurface20(),
                borderColor: currentColors.foreground,
              },
            ]}
            onPress={() => setMode('light')}
          >
            <Paragraph>
              Light
            </Paragraph>
          </TouchableOpacity>
        </View>
      </View>
      <Button title='reset' onPress={() => {
        setMode('system')
        setScheme('default')
      }} />
    </View>
  );
};

const CIRCLE_SIZE = 45;
const BORDER_WIDTH = 3;

const styles = StyleSheet.create({
  container: {
    padding: SIZES.cards.padding,
    borderRadius: SIZES.cards.radius,
    gap: SIZES.screens.gap,
  },
  title: {
    fontSize: SIZES.text.fontSize.h2,
    fontFamily: 'Metropolis-Bold',
  },
  section: {
    gap: SIZES.screens.gap,
  },
  sectionTitle: {
    fontSize: SIZES.text.fontSize.medium,
    fontFamily: 'CourierPrime_400Regular',
    opacity: 0.8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SIZES.screens.gap,
    justifyContent: 'flex-start',
  },
  schemeCircleContainer: {
    borderRadius: CIRCLE_SIZE / 2,
    borderWidth: BORDER_WIDTH,
    padding: 2,
  },
  splitCircle: {
    width: CIRCLE_SIZE - BORDER_WIDTH * 2,
    height: CIRCLE_SIZE - BORDER_WIDTH * 2,
    borderRadius: (CIRCLE_SIZE - BORDER_WIDTH * 2) / 2,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  circleHalf: {
    flex: 1,
  },
  leftHalf: {
    borderRightWidth: 0.5,
  },
  rightHalf: {
    borderLeftWidth: 0.5,
  },
  modeContainer: {
    flexDirection: 'row',
    gap: SIZES.screens.gap,
  },
  modeButton: {
    flex: 1,
    padding: SIZES.cards.padding,
    borderRadius: SIZES.cards.radius,
    alignItems: 'center',
  },
  activeMode: {
    borderWidth: 2,
  },
  systemButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.screens.gap,
    padding: SIZES.cards.padding,
    borderRadius: SIZES.cards.radius,
    borderWidth: 2,
  },
  systemIndicator: {
    width: 30,
    height: 30,
    borderRadius: 15,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  systemHalf: {
    flex: 1,
  },
});
