import { useState } from 'react'
import { ToastQueueItem } from '@/components/compositions/Toast'

export const useToastQueue = () => {
  const [queue, setQueue] = useState<ToastQueueItem[]>([])
  const addToast = ({ message, type, permanent, duration, location, _bottom, _top }: ToastQueueItem ) => {
    let newToast = {
      id: Date.now().toString(),
      message,
      type,
      permanent,
      duration,
      location,
      _bottom,
      _top,
    }

    setQueue(prev => [...prev, newToast as ToastQueueItem])
  }

  const removeToast = (id: string) => {
    setQueue(prev => prev.filter(toast => toast.id !== id))
  }

  return { queue, addToast, removeToast }
}