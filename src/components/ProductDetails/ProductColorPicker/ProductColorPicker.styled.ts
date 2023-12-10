import styled from "styled-components";

export const StyledColorPicker = styled.div`
  display: flex;
  gap: 8px;
`;

export const ColorBlock = styled.div`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  
  &.active {
    background-color: navajowhite;
  }
`;