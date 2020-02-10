import styled from "@emotion/styled";
import { Link } from "gatsby";

export const NavButtonStyle = styled(Link)`
  height: 100%;
  width: 70px;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;

  transition: background-color 0.2s;

  &:hover {
    background-color: #e74c3c;
  }
`;

export const NavButtonText = styled.div`
  color: #ffffff;
  font-size: 15px;
  text-align: center;
  font-family: "Press Start 2P", sans-serif;
  padding: 0;
`;

export const NavButtonIcon = styled.img`
  height: 50px;
  width: 50px;
  image-rendering: optimizeSpeed;
`;
