import React from "react";
import styled from "styled-components";
import MainButton from "../MainButton";

const MenuPresenter = (props) => {
  const { goCoffee, goTea, goDessert } = props;
  return (
    <Wrapper>
      <UnclickedButton onClick={goCoffee}>음료</UnclickedButton>
      <ClickedButton onClick={goTea}>푸드</ClickedButton>
      <UnclickedButton onClick={goDessert}>상품</UnclickedButton>
      <MainButtonWrapper><MainButton/></MainButtonWrapper>
    </Wrapper>
  );
};
export default MenuPresenter;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ClickedButton = styled.button`
  border-radius: 5px;
  font-size: 19px;
  margin: 5px;
  margin-left: -35px;
  width: 130px;
  height: 50px;
  text-align: right;
`;

const UnclickedButton = styled.button`
  border-radius: 5px;
  font-size: 19px;
  margin: 5px;
  margin-left: -130px;
  width: 130px;
  height: 50px;
  text-align: right;
`;

const MainButtonWrapper = styled.div`
  margin-top: 420px;
`;