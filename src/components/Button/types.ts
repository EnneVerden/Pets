import { ReactElement, ReactNode } from 'react'

export type Props = {
  onPress: () => void
  children?: ReactNode
  Icon?: ReactElement
  styles?: {
    button?: any
    text?: any
    icon?: any
  }
  iconSize?: {
    width: number
    height: number
  }
  iconColor?: string
  opacity?: number
}
