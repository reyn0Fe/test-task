import {createContext} from "react";
import {ProductStore} from "./product";
import {CartStore} from "./cart";

export const store = {
  product: new ProductStore(),
  cart: new CartStore()
}

export const StoreContext = createContext(store)