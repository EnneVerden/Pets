import { Cat } from '@/types/cat'

export type Props = {
  cat: Cat
  onlyInfo?: boolean
  styles?: {
    container?: any
    image?: {
      container?: any
      image?: any
    }
    info?: {
      container?: any
      breed?: any
      location?: {
        container?: any
        title?: any
      }
    }
    profile?: {
      button?: any
      title?: any
    }
  }
  iconSize?: {
    width: number
    height: number
  }
}
