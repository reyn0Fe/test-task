export type SizeInfo = {
  id: number
  label: string
  number: number
}

export type ProductColor = {
  id: number
  name: string
  images: string[]
  price: string
  description: string
  sizes: number[]
}

export type ProductInfo = {
  id: number
  name: string
  colors: ProductColor[]
}

