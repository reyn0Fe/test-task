import {useState} from "react";
import * as S from './ProductImagePicker.styled'
import {useStore} from "../../../hooks";
import {observer} from "mobx-react-lite";

export const ProductImagePicker= observer(() => {
  const { product } = useStore()
  const [activeImage, setActiveImage] = useState(0)

  const changeActiveImage = (idx: number) => setActiveImage(idx);

  return (
    <S.StyledImagePicker>
      <S.ImagesListBlock>
        {
          product.colorInfo.images.slice(0,5).map((src, idx) => (
            <S.ImagesListItem
              onClick={() => changeActiveImage(idx)}
              key={src}
              $active={idx === activeImage}
            >
              <img src={src} alt={product.name}/>
            </S.ImagesListItem>
          ))
        }
      </S.ImagesListBlock>

      <S.ActiveImageBlock>
        <img src={product.colorInfo.images[activeImage]} alt={product.name}/>
      </S.ActiveImageBlock>
    </S.StyledImagePicker>
  );
})
