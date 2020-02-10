import styled from "@emotion/styled";

export const StyledCard = styled.div`
  background-color: #fff;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  border-top: 0;
  border-top-style: none;
  border-left: 0;
  border-left-style: none;
  border-right: 0;
  border-right-style: none;
  border-bottom: 3px #bbb;
  border-bottom-style: none;
  border-style: solid;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 0px;
  margin-bottom: 0px;
  width: 95%;
  position: relative;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const CardTitle = styled.h3`
  color: #fff;
  position: absolute;
  top: 50%;
  left: 30px;
  margin: 0;
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
`;

export const CardTitleContainer = styled.div`
  background-color: #e43f00 !important;
  width: 50px;
  order: 0;
  padding: 2px;
  width: 60px;
`;

export const CardContent = styled.div`
  flex: 6;
  order: 1;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;
