export interface Cat {
  name: string
  origin: string
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
