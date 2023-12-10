import styled from "styled-components";

export const StyledProductCardImages = styled.div`
  margin-bottom: 16px;
  position: relative;
`;

export const ImageIndicator = styled.div<{ $imagesCount: number, $active: boolean }>`
  flex-basis: ${props => `${100/props.$imagesCount-5}%`};  
  height: 100%;
  border-bottom: 2px solid rgba(255, 222, 173, ${props => props.$active ? 1 : 0.7});
`;

export const ImageIndicatorsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  max-width: 150px;
  height: 205px;
  object-fit: cover;
`