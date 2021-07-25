export interface Cat {
  id: string
  name: string
  origin: string
  intelligence: number
  temperament?: string
  description?: string
  weight?: {
    imperial: string
    metric: string
  }
  image?: {
    id: string
    width: number
    height: number
    url: string
  }
  wikipedia_url?: string
}
