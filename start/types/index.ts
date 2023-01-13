export type Room = {
  id: string
  surface: number
  isAvailable: boolean
  name: string
  description?: string
  color?: string
  building: string
}

export type Building = {
  id: string
  name: string
}
