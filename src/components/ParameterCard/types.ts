import { ReactElement } from 'react'

export type Props = {
  Icon: ReactElement
  title: string | number
  onIconClick?: () => void
}
