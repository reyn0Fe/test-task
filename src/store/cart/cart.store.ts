import {makeAutoObservable} from "mobx";
import {CartProductData, CartProductInfo} from "./cart.types";

export class CartStore {
  private _products: Map<string, CartProductData> = new Map<string, CartProductData>()

  constructor() {
    makeAutoObservable(this)
  }

  private generateProductKey(product:CartProductInfo) {
    return `${product.name}-${product.color.id}-${product.size.id}`
  }

  private getProductsByKey(product: CartProductInfo) {
    const productKey = this.generateProductKey(product)
    return this._products.get(productKey)
  }

  public addProduct(product: CartProductInfo) {
    const productsByKey = this.getProductsByKey(product)
    const key = this.generateProductKey(product)

    if (!productsByKey) {
      this._products.set(key, {
        maxRenderId: 1,
        data: [ {...product, renderId: `${key}-1`} ]
      })
    } else {
      productsByKey.data.push({...product, renderId: `${key}-${productsByKey.maxRenderId + 1}`})
      productsByKey.maxRenderId++;
    }
  }

  public removeProduct(product: CartProductInfo) {
    const productsByKey = this.getProductsByKey(product)!
    productsByKey.data.pop()
  }

  public get products() {
    let productsInCart: CartProductInfo[] = []

    for (const productsByKey of Array.from(this._products.values())) {
      productsInCart = [...productsInCart, ...productsByKey.data]
    }

    return productsInCart
  }
}