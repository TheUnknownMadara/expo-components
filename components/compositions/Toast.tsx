import React, { useCallback, useEffect } from 'react';
import { ColorSchemeName, TouchableOpacity } from 'react-native';
import { MotiView } from 'moti';
import LucideIcon, { IconNames } from '@/components/primitives/LucideIcon';
import { BlurView } from '@react-native-community/blur';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import {
  messageColor,
  container,
  messageStyle,
  blurView,
} from '@/theme/styles/components/compositions/toast';
import Paragraph from '@/components/primitives/Paragraph';

export interface ToastContextType {
  addToast: ({
    message,
    type,
    permanent,
    duration,
    size,
    location,
  }: ToastProps) => void;
}

export type ToastType = 'success' | 'error' | 'info';

export type ToastLocation = 'top' | 'bottom';

export interface ToastQueueItem extends ToastProps {
  id: string;
  _bottom?: number;
  _top?: number;
  onHide: (id: string) => void;
}

export interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  permanent?: boolean;
  size?: number;
  location?: ToastLocation;
}

const iconMap: Record<ToastType, string> = {
  success: 'LaptopMinimalCheck',
  error: 'OctagonAlert',
  info: 'BookOpenText',
};

export const Toast = ({
  id,
  message,
  type = 'info',
  duration = 3000,
  size = 24,
  onHide,
  permanent = false,
  location,
  _bottom,
  _top,
}: ToastQueueItem) => {
  const hideToast = useCallback(() => {
    onHide(id);
  }, [id, onHide]);
  const colorScheme = useColorScheme() as ColorSchemeName;
  useEffect(() => {
    if (!permanent) {
      const timer = setTimeout(hideToast, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, hideToast]);

  return (
    <MotiView
      from={{ opacity: 0, translateY: _top === undefined ? -40 : 40 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: _top === undefined ? 40 : -40 }}
      transition={{ type: 'timing', duration: 400 }}
      style={[
        container(type as ToastType, colorScheme, location, _bottom, _top)
          .container,
      ]}
    >
      <BlurView
        style={blurView(colorScheme)}
        // Don't let this shit be less than 1, or it will crash
        blurAmount={1}
        // This is the only mode that works without crashing
        // React Native Community BlurView doesn't work with Expo Go
        // RN: 0.76.6
        blurType={colorScheme === 'dark' ? 'dark' : 'light'}
      />
      <LucideIcon
        name={iconMap[type as ToastType] as IconNames}
        size={size}
        animate={{
          color: messageColor(type as ToastType, colorScheme),
        }}
      />
      <Paragraph
        style={[
          messageStyle.message,
          { color: messageColor(type as ToastType, colorScheme) },
        ]}
      >
        {message}
      </Paragraph>
      <TouchableOpacity onPress={hideToast}>
        <LucideIcon
          name="X"
          size={size}
          animate={{
            color: messageColor(type as ToastType, colorScheme),
          }}
        />
      </TouchableOpacity>
    </MotiView>
  );
};
