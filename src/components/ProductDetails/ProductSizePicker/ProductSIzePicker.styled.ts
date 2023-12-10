import styled from "styled-components";

export const StyledSizePicker = styled.div`
  display: flex;
  gap: 8px;
`;

export const SizeOption = styled.div`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  
  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  &.active {
    background-color: navajowhite;
  }
`;