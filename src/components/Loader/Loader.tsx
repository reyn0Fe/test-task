import * as S from './Loader.styled'
import {FC} from "react";
import {LoaderProps} from "./Loader.types";

export const Loader: FC<LoaderProps> = ({ fullPage }) => {
  return (
    <S.StyledLoader $fullPage={!!fullPage}>
      Loading...
    </S.StyledLoader>
  )
}