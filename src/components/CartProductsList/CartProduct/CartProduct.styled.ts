import styled from "styled-components";

export const StyledCartProduct = styled.div`
  min-width: 330px;
  padding: 16px 32px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  border: 1px solid #ccc;
  border-radius: 12px;
`;

export const ProductImage = styled.div`
  img {
    width: 120px;
    height: 160px;
    object-fit: cover;
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
`;

export const ProductName = styled.h3``;

export const ProductTable = styled.div`
  margin-bottom: 8px;
`;

export const TableCell = styled.div``;

export const RemoveButton = styled.button`
  padding: 5px 10px;
  width: 100%;
  background-color: darkred;
  border: 1px solid darkred;
  border-radius: 6px;
  cursor: pointer;
  color: #fff;
  opacity: 0.8;
  
  &:hover { opacity: 1; }
`
