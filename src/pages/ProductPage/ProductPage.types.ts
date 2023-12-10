import {ProductInfo, SizeInfo} from "../../services";

export type ProductPageLoaderReturn = {
  product: ProductInfo
  sizes: SizeInfo[]
} | null