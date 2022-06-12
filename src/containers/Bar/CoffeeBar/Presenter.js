import React from "react";
import styled from "styled-components";
import MainButton from "../../Button/MainButton";
import {AiOutlineCoffee} from "react-icons/ai"

const MenuPresenter = (props) => {
  const { goCoffee, goTea, goDessert } = props;
  return (
    <Wrapper>
      <ClickedButton onClick={goCoffee}><AiOutlineCoffee size="25"/> 음료</ClickedButton>
      <UnclickedButton onClick={goTea}>푸드</UnclickedButton>
      <UnclickedButton onClick={goDessert}>상품</UnclickedButton>
      <MainButtonWrapper><MainButton/></MainButtonWrapper>
    </Wrapper>
  );
};
export default MenuPresenter;

const Wrapper = styled.div`
  background-color: #DCE4ED;
  display: flex;
  flex-direction: column;
  position: fixed;
  margin-top: 15px;
`;

const ClickedButton = styled.button`
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
  font-size: 19px;
  margin: 5px 5px 5px 0px;
  width: 95px;
  height: 50px;
  background-color: #FFFFFF;
  font-weight: bold;
  border-left-color: transparent;
`;

const UnclickedButton = styled.button`
  border-radius: 5px;
  font-size: 19px;
  margin: 5px 0px 5px 0px;
  width: 50px;
  height: 50px;
  text-align: right;
  background-color: #FFFFFF;
  border-left-color: transparent;
`;

const MainButtonWrapper = styled.div`
position : fixed;
bottom : 0;
margin: 0 0 10px 7px;
`;