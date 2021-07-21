import { ReactElement } from 'react'

export type Props = {
  value: string
  onChange: (text: string) => void
  LeftIcon?: ReactElement
  placeholder?: string
  styles?: {
    container?: any
    input?: any
  }
}
