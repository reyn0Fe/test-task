import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledHeader = styled.header`
  padding: 15px 35px;
  box-shadow: 0 -6px 10px 5px rgba(0,0,0,0.5);
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 18px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  opacity: 0.8;
  
  &:hover { opacity: 1; }
  &.active { opacity: 1; }
`