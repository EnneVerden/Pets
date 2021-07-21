import { ReactElement } from 'react'

export type Props = {
  value: string
  onChange: (text: string) => void
  LeftIcon?: ReactElement
  RightButton?: ReactElement
  placeholder?: string
  styles?: {
    container?: any
    input?: any
    buttonContainer?: any
    button?: any
    buttonIcon?: any
    buttonText?: any
  }
}
