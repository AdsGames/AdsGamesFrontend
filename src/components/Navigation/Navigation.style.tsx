import styled from "@emotion/styled";

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  background-color: #c32919;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.4);
  z-index: 6;
  display: flex;
  justify-content: center;
  overflow: hidden;

  transition: height 0.1s ease-in;

  &:hover {
    height: 70px;
  }
`;

export const NavButton = styled.div`
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
