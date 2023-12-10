import {createBrowserRouter, RouteObject} from "react-router-dom";
import {productsPage} from "./Products";
import {productPage} from "./ProductPage";
import {cartPage} from "./Cart";

export const pages: RouteObject[] = [
  productsPage,
  productPage,
  cartPage
]

export const router = createBrowserRouter(pages)