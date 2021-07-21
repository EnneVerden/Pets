import { ReactElement, ReactNode } from 'react'

export type Props = {
  children?: ReactNode
  Icon?: ReactElement
  styles?: {
    button?: any
    text?: any
    icon?: any
  }
}
