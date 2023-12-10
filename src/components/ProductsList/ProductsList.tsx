import {Loader} from "../Loader";
import {useProducts} from "../../hooks";
import * as S from './ProductsList.styled'
import {ProductCard} from "./ProductCard";

export const ProductsList = () => {
  const { products, loading } = useProducts()

  if (loading) return <Loader />

  return (
    <S.StyledProductsList>
      {
        products.length > 0 ? products.map(p => (
          <ProductCard key={p.id} {...p} />
        )) : (
          <div>Товары не найдены</div>
        )
      }
    </S.StyledProductsList>
  )
}
