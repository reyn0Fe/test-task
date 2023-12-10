import {ErrorContent, Layout} from "../components";
import {RouteObject} from "react-router-dom";
import {lazy, Suspense} from "react";
import {Loader} from "../components/Loader";

const CartProductsList = lazy(() => import('../components/CartProductsList'))

export const Cart = () => {
  return (
    <Suspense fallback={<Loader fullPage />}>
      <Layout title={"Корзина"}>
        <CartProductsList />
      </Layout>
    </Suspense>
  )
}

export const cartPage: RouteObject = {
  path: '/cart',
  element: <Cart />,
  errorElement: <ErrorContent />
}