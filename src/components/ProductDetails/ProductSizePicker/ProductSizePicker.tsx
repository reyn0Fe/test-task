import {observer} from "mobx-react-lite";
import {useStore} from "../../../hooks";
import * as S from './ProductSIzePicker.styled'

export const ProductSizePicker = observer(() => {
  const { product } = useStore()

  const setActiveOption = async (sizeId: number) => {
    if (sizeId !== product.activeSize?.id) {
      await product.pickSize(sizeId)
    } else product.resetSize()
  }

  return (
    <S.StyledSizePicker>
      {
        product.existingSizes.map(size => (
          <S.SizeOption
            onClick={() => setActiveOption(size.id)}
            className={`
              ${!size.available ? 'disabled' : ''}
              ${size.id === product.activeSize?.id ? 'active' : ''}
            `}
            key={size.id}
          >
            {size.label}
          </S.SizeOption>
        ))
      }
    </S.StyledSizePicker>
  );
})