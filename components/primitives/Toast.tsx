import React, { useCallback, useEffect, useState } from 'react'
import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { MotiView, AnimatePresence } from 'moti'
import LucideIcon from '@/components/primitives/LucideIcon'
import Paragraph from './Paragraph'

type ToastType = 'success' | 'error' | 'info'

interface ToastProps {
  message: string
  type?: ToastType
  duration?: number
  onHide?: () => void
}

const iconMap: Record<ToastType, string> = {
  success: 'LaptopMinimalCheck',
  error: 'OctagonAlert',
  info: 'BookOpenText',
}

export const Toast = ({
  message,
  type = 'info',
  duration = 3000,
  onHide,
}: ToastProps) => {
  const [visible, setVisible] = useState(true)

  const hideToast = useCallback(() => {
    setVisible(false)
    onHide?.()
  }, [onHide])

  useEffect(() => {
    const timer = setTimeout(hideToast, duration)
    return () => clearTimeout(timer)
  }, [duration, hideToast])

  return (
    <AnimatePresence>
      {visible && (
        <MotiView
          from={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 40 }}
          transition={{ type: 'timing', duration: 200 }}
          style={[styles.container, styles[type]]}
        >
          <LucideIcon
            name={iconMap[type] as any}
            size={24}
            animate={{ color: 'white' }}
          />
          <Paragraph style={styles.message}>{message}</Paragraph>
          <TouchableOpacity onPress={hideToast}>
            <LucideIcon
              name="X"
              size={20}
              animate={{ color: 'white' }}
            />
          </TouchableOpacity>
        </MotiView>
      )}
    </AnimatePresence>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    width: Dimensions.get('window').width - 32,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  success: {
    backgroundColor: '#4CAF50',
  },
  error: {
    backgroundColor: '#F44336',
  },
  info: {
    backgroundColor: '#000',
    borderColor: '#c1c1c1',
  },
  message: {
    color: 'white',
    fontSize: 14,
    flex: 1,
    marginHorizontal: 12,
  },
})

// Exemplo de uso:
// <Toast 
//   message="Operação realizada com sucesso!" 
//   type="success" 
//   onHide={() => console.log('Toast fechado')}
// />