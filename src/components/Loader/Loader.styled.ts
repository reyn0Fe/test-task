import styled from "styled-components";

export const StyledLoader = styled.div<{ $fullPage: boolean }>`
  font-size: ${props => props.$fullPage ? "24px" : "16px"};
  text-align: ${props => props.$fullPage ? "center" : "inherit"};
  font-weight: ${props => props.$fullPage ? 700 : 400};
`