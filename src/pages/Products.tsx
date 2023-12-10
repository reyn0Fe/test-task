import {RouteObject} from "react-router-dom";
import {ErrorContent, Layout} from "../components";
import {lazy, Suspense} from "react";
import {Loader} from "../components/Loader";

const ProductsList = lazy(() => import("../components/ProductsList"))

export const Products = () => {
  return (
    <Suspense fallback={<Loader fullPage />}>
      <Layout title="Список товаров">
        <ProductsList />
      </Layout>
    </Suspense>
  )
}

export const productsPage: RouteObject = {
  path: "/",
  element: <Products />,
  errorElement: <ErrorContent />
}