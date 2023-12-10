import styled from "styled-components";

export const StyledAddToCartButton = styled.button`
  padding: 10px 15px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 6px;
  cursor: pointer;
  
  &:active {
    transform: translateY(2px);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: wait;
  }
`