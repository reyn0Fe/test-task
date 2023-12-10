import * as S from './CartProductsList.styled'
import {observer} from "mobx-react-lite";
import {useStore} from "../../hooks";
import {CartProduct} from "./CartProduct";

export const CartProductsList = observer(() => {
  const { cart } = useStore()

  return (
    <S.StyledCartProductsList>
      {cart.products.length > 0 ? cart.products.map(p =>
          <CartProduct key={p.renderId} {...p} />)
        : (
        <h2>Товары не найдены</h2>
      )}
    </S.StyledCartProductsList>
  );
})
