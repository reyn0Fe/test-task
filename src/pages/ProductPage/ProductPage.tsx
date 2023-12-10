import {ErrorContent, Layout} from "../../components";
import {RouteObject, useLoaderData} from "react-router-dom";
import {productPageLoader} from "./ProductPage.loader";
import {observer} from "mobx-react-lite";
import {useStore} from "../../hooks";
import {lazy, Suspense, useEffect} from "react";
import {ProductPageLoaderReturn} from "./ProductPage.types";
import {Loader} from "../../components/Loader";

const ProductDetails = lazy(() => import('../../components/ProductDetails'))

export const ProductPage = observer(() => {
  const productData = useLoaderData() as ProductPageLoaderReturn
  const { product } = useStore()

  useEffect(() => {
    if (productData) {
      product.initProduct(productData.product, productData.sizes)
    }
  }, [productData]);

  if (!productData) return <ErrorContent />

  return (
    <Suspense fallback={<Loader fullPage />}>
      <Layout title={productData.product.name}>
        <ProductDetails />
      </Layout>
    </Suspense>
  )
})

export const productPage: RouteObject = {
  path: "/product/:productId",
  element: <ProductPage />,
  loader: productPageLoader,
  errorElement: <ErrorContent />
}