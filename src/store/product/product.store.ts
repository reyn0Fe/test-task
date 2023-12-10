import {makeAutoObservable, runInAction} from "mobx";
import {getProductColor, getSize, getSizes, ProductColor, ProductInfo, SizeInfo} from "../../services";
import {ProductExistingSizes} from "./product.types";

export class ProductStore {
  public id!: number
  public name!: string
  public colorInfo!: ProductColor
  public availableColors: ProductColor[] = []
  public activeSize: SizeInfo | undefined
  public loading: boolean = false
  public existingSizes: ProductExistingSizes[] = []

  constructor() {
    makeAutoObservable(this);
  }

  public initProduct(product: ProductInfo, sizes: SizeInfo[]) {
    this.id = product.id
    this.name = product.name
    this.colorInfo = product.colors[0]
    this.availableColors = product.colors
    this.initSizes(sizes)
  }

  public initSizes(allSizes: SizeInfo[]) {
    const existedSizes: ProductExistingSizes[] = []

    const colorSizes = new Map<number, boolean>()
    this.colorInfo.sizes.forEach(sizeId => colorSizes.set(sizeId, true))

    allSizes.forEach(size => {
      let available = false
      if (colorSizes.has(size.id)) available = true;

      existedSizes.push({...size, available})
    })

    this.existingSizes = existedSizes
  }

  public async changeColor(colorId: number) {
    try {
      this.loading = true
      const [colorInfo, sizes] = await Promise.all([
        getProductColor(this.id, colorId),
        getSizes()
      ])
      runInAction(() => {
        this.colorInfo = colorInfo
        this.initSizes(sizes)
      })

      if (this.activeSize) {
        const sizeExists = this.colorInfo.sizes.indexOf(this.activeSize.id) >= 0
        runInAction(() => this.activeSize = sizeExists ? this.activeSize : undefined)
      }


    } catch (e) {
      console.error("Error during change color:", e)
    } finally {
      this.loading = false
    }
  }

  public resetSize() {
    this.activeSize = undefined
  }

  public async pickSize(id: number) {
    try {
      this.loading = true
      const activeSize = await getSize(id)
      runInAction(() => this.activeSize = activeSize)
    } catch (e) {
       console.error("Error during pick size:", e)
    } finally {
      this.loading = false
    }
  }
}