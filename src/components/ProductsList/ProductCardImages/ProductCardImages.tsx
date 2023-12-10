import {FC, useState} from "react";
import * as S from './ProductCardImages.styled'
import { ProductCardImagesProps } from './ProductCardImages.types';

export const ProductCardImages: FC<ProductCardImagesProps> = ({ images, productName }) => {
  const [activeImage, setActiveImage] = useState(images[0])

  const changeActiveImage = (imageIdx: number) => {
    if (images[imageIdx] !== activeImage) {
      setActiveImage(images[imageIdx]);
    }
  }

  return (
    <S.StyledProductCardImages onMouseOut={() => changeActiveImage(0)}>
      <S.Image src={activeImage} alt={productName} />

      <S.ImageIndicatorsContainer>
        {images.slice(0,3).map((src, idx) => (
          <S.ImageIndicator
            $active={images[idx] === activeImage}
            $imagesCount={images.length}
            onMouseEnter={() => changeActiveImage(idx)}
            key={src}
          />
        ))}
      </S.ImageIndicatorsContainer>
    </S.StyledProductCardImages>
  );
}
