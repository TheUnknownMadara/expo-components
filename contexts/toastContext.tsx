import React, { createContext, useContext, useState } from 'react'
import { AnimatePresence, View } from 'moti'
import { Toast, ToastContextType, ToastQueueItem } from '@/components/compositions/Toast'
import { Dimensions } from 'react-native'


const ToastContext = createContext<ToastContextType | null>(null)

const TOAST_HEIGHT = 60
const MARGIN = 8
const {height, width} = Dimensions.get('window')

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastQueueItem[]>([])
  const addToast = ({message, type, permanent, duration, location} : ToastQueueItem) => {
    const newToast = {
      id: Date.now().toString(),
      message,
      type,
      permanent,
      duration,
      location
    }

    if (toasts.length >= 2 || toasts.filter(toast => toast.location != newToast.location).length > 0) {
      setToasts(prev => prev.filter(toast => toast.location === newToast.location).slice(1))
    }

    setToasts(prev => [...prev, newToast as ToastQueueItem])
  }

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ addToast } as any}>
      {children}
      <AnimatePresence>
        <View style={{ position: 'absolute', left: 0, right: 0, top: 30, height: 60 }}>
        {toasts.map((toast, index) => {
          return (
          <Toast
            key={toast.id}
            id={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onHide={removeToast}
            location={toast.location}
            _bottom={toast.location === 'bottom' ? (-index) * (TOAST_HEIGHT + MARGIN) : undefined}
            _top={(toast.location && toast.location !== 'top') ? undefined : (height - 80) - ((index) * (TOAST_HEIGHT + MARGIN))}
            size={toast.size}
            permanent={toast.permanent}
          />
        )})}
        </View>
      </AnimatePresence>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}