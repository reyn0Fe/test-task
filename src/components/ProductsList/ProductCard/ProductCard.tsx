import {FC} from "react";
import {ProductCardProps} from "./ProductCard.types";
import * as S from './ProductCard.styled'
import {ProductCardImages} from "../ProductCardImages";
import {useNavigate} from "react-router-dom";

export const ProductCard: FC<ProductCardProps> = ({ name, colors, id }) => {
  const navigate = useNavigate()

  const openProductPage = () => navigate(`/product/${id}`)

  return (
    <S.StyledProductCard onClick={openProductPage}>
      <ProductCardImages
        images={colors[0].images}
        productName={name}
      />

      {name}
    </S.StyledProductCard>
  );
};
