import styled from "styled-components";

export const StyledImagePicker = styled.div`
  display: flex;
  gap: 40px;
`;

export const ImagesListBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ImagesListItem = styled.div<{ $active: boolean }>`
  padding: 15px;
  border: 1px solid #ccc;
  opacity: ${props => props.$active ? 1 : 0.7};
  border-radius: 12px;
  
  img {
    width: 90px;
    height: 100px;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const ActiveImageBlock = styled.div`
  padding: 25px;
  border: 1px solid #ccc;
  border-radius: 12px;
  
  img {
    width: 400px;
    height: 530px;
    object-fit: cover;
  }
`;