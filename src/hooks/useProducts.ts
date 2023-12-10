import {useEffect, useState} from "react";
import {getProducts, ProductInfo} from "../services";

export const useProducts = (immediatelyFetch=true) => {
  const [products, setProducts] = useState<ProductInfo[]>([])
  const [loading, setLoading] = useState(immediatelyFetch)

  useEffect(() => {
    fetchProducts()
  }, []);

  const fetchProducts = () => {
    setLoading(true)

    getProducts()
      .then(productsData => setProducts(productsData))
      .catch(e => console.error("Error during fetching products:", e))
      .finally(() => setLoading(false))
  }

  return {
    products,
    loading
  }
}