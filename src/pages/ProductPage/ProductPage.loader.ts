import {LoaderFunctionArgs} from "react-router-dom";
import {getProduct, getSizes} from "../../services";
import {ProductPageLoaderReturn} from "./ProductPage.types";

export const productPageLoader = async ({ params }: LoaderFunctionArgs):
  Promise<ProductPageLoaderReturn> => {
  try {
    const productId = Number(params['productId'])
    const [product, sizes] = await Promise.all([
      getProduct(productId),
      getSizes()
    ])

    return {
      product,
      sizes
    }
  } catch (e) {
    console.error("Error during load product page:",e)
    return null;
  }
}