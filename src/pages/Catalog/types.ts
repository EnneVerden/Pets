import { SectionListData } from 'react-native'
import { Cat } from '@/types/Cat'

export type Data = SectionListData<Cat, { title: string; data: Cat }>[]

export type Filters = {
  breed: boolean
  origin: boolean
}
