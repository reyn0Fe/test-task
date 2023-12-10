import {ProductColor, SizeInfo} from "../../services";

export type CartProductInfo = {
  id: number
  name: string
  color: ProductColor
  size: SizeInfo
}

export type CartProductData = {
  data: Array<CartProductInfo & { renderId: string }>
  maxRenderId: number
}