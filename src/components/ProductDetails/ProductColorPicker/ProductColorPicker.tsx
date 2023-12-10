import {observer} from "mobx-react-lite";
import {useStore} from "../../../hooks";
import * as S from './ProductColorPicker.styled'

export const ProductColorPicker = observer(() => {
  const { product } = useStore()

  const changeProductColor = async (colorId: number) => {
    await product.changeColor(colorId)
  }

  return (
    <S.StyledColorPicker>
      {product.availableColors.map(color => (
        <S.ColorBlock
          onClick={() => changeProductColor(color.id)}
          className={product.colorInfo.id === color.id ? 'active' : ''}
          key={color.id}
        >
          {color.name}
        </S.ColorBlock>
      ))}
    </S.StyledColorPicker>
  );
})