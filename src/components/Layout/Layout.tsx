import {FC} from "react";
import {Header} from "./Header";
import {LayoutProps} from "./Layout.types";
import * as S from './Layout.styled'

export const Layout: FC<LayoutProps> = ({ title, children }) => {
  return (
    <S.StyledLayout>
      <Header />

      <S.PageContent>
        <h1>{title}</h1>

        <div>
          {children}
        </div>
      </S.PageContent>
    </S.StyledLayout>
  );
};
