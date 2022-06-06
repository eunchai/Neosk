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
  font-weight: bold;
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