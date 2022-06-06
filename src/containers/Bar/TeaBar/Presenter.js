import React from "react";
import styled from "styled-components";
import MainButton from "../../Button/MainButton";
import {ImMug} from "react-icons/im"

const MenuPresenter = (props) => {
  const { goCoffee, goTea, goDessert } = props;
  return (
    <Wrapper>
      <UnclickedButton onClick={goCoffee}>음료</UnclickedButton>
      <UnclickedButton onClick={goTea}>푸드</UnclickedButton>
      <ClickedButton onClick={goDessert}><ImMug size="22"/> 상품</ClickedButton>
      <MainButtonWrapper><MainButton/></MainButtonWrapper>
    </Wrapper>
  );
};
export default MenuPresenter;

const Wrapper = styled.div`
  background-color: #DCE4ED;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: fixed;
  margin-top: 15px;
`;

const ClickedButton = styled.button`
  border-radius: 5px;
  font-size: 19px;
  margin: 5px;
  margin-left: -35px;
  width: 130px;
  height: 50px;
  padding-left: 25px;
  background-color: #FFFFFF;
`;

const UnclickedButton = styled.button`
  border-radius: 5px;
  font-size: 19px;
  margin: 5px;
  margin-left: -130px;
  width: 130px;
  height: 50px;
  text-align: right;
  background-color: #FFFFFF;
`;

const MainButtonWrapper = styled.div`
position : fixed;
bottom : 0;
margin-bottom: 10px;
`;