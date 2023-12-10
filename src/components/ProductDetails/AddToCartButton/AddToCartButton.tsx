import * as S from './AddToCartButton.styled'
import {observer} from "mobx-react-lite";
import {useStore} from "../../../hooks";

export const AddToCartButton = observer(() => {
  const { product, cart } = useStore()

  const addToCart = () => {
    cart.addProduct({
      id: product.id,
      name: product.name,
      size: product.activeSize!,
      color: product.colorInfo
    })
  }

  return (
    <S.StyledAddToCartButton
      onClick={addToCart}
      disabled={!product.activeSize || product.loading}
    >
      Добавить в корзину
    </S.StyledAddToCartButton>
  )
})