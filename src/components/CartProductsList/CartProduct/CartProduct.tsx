import {FC} from "react";
import {CartProductInfo} from "../../../store/cart";
import * as S from './CartProduct.styled'
import {observer} from "mobx-react-lite";
import {useStore} from "../../../hooks";

export const CartProduct: FC<CartProductInfo> = observer((props) => {
  const {cart} = useStore()
  const {size, color,name} = props

  const removeProduct = () => {
    cart.removeProduct(props)
  }

  return (
    <S.StyledCartProduct>
      <S.ProductImage>
        <img src={color.images[0]} alt={name}/>
      </S.ProductImage>

      <S.ProductInfo>
        <S.ProductName>{name}</S.ProductName>

        <S.ProductTable>
          <S.TableCell>
            <span>Размер:</span> {size.label}
          </S.TableCell>
          <S.TableCell>
            <span>Цвет:</span> {color.name}
          </S.TableCell>
          <S.TableCell>
            <span>Цена:</span> {color.price}₽
          </S.TableCell>
        </S.ProductTable>

        <S.RemoveButton onClick={removeProduct}>Удалить</S.RemoveButton>
      </S.ProductInfo>
    </S.StyledCartProduct>
  )
})