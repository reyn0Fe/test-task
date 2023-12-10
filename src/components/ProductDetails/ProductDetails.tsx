import * as S from './ProductDetails.styled'
import {observer} from "mobx-react-lite";
import {useStore} from "../../hooks";
import {Loader} from "../Loader";
import {ProductImagePicker} from "./ProductImagePicker";
import {ProductColorPicker} from "./ProductColorPicker";
import {ProductSizePicker} from "./ProductSizePicker";
import {AddToCartButton} from "./AddToCartButton";

export const ProductDetails = observer(() => {
  const { product } = useStore()

  if (!product.id) return <Loader fullPage />

  return (
    <S.StyledProductDetails>
      <ProductImagePicker />

      <S.ProductInfo>
        <div>
          <S.BlockTitle>Описание товара</S.BlockTitle>
          {product.colorInfo.description}
        </div>

        <div>
          <S.BlockTitle>Выберите цвет</S.BlockTitle>
          <ProductColorPicker />
        </div>

        <div>
          <S.BlockTitle>Выберите размер</S.BlockTitle>
          <ProductSizePicker />
        </div>

        <div>
          <AddToCartButton />
        </div>
      </S.ProductInfo>
    </S.StyledProductDetails>
  );
})
