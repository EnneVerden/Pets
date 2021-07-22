import { ReactNode } from 'react'

export type Props = {
  visible: boolean
  children: ReactNode
  onSubmit: () => void
  onCancel: () => void
  animationType?: 'none' | 'fade' | 'slide'
  styles?: {
    background?: any
    container?: any
  }
}
