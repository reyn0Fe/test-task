import * as S from './Header.styled'
import {useLocation} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../hooks";

export const Header = observer(() => {
  const location = useLocation()
  const { cart } = useStore()
  const cartProductsCount = cart.products.length > 0 ? `(${cart.products.length})` : ''

  return (
    <S.StyledHeader>
      <S.NavLink className={`${location.pathname === '/' ? 'active' : ''}`} to={'/'}>
        Главная
      </S.NavLink>

      <S.NavLink className={`${location.pathname === '/cart' ? 'active' : ''}`} to={'/cart'}>
        Корзина{cartProductsCount}
      </S.NavLink>
    </S.StyledHeader>
  );
})
