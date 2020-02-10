import styled from "@emotion/styled";

import Container from "../Container";

export const StyledFooter = styled.footer`
  height: 84px;
  background-color: #e43f00;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
`;

export const FooterText = styled.p`
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  margin: 0;
`;

export const FooterIcons = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
