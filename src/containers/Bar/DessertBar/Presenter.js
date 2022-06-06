import React from "react";
import styled from "styled-components";
import MainButton from "../../Button/MainButton";
import {RiCake3Fill} from "react-icons/ri"

const MenuPresenter = (props) => {
  const { goCoffee, goTea, goDessert } = props;
  return (
    <Wrapper>
      <UnclickedButton onClick={goCoffee}>음료</UnclickedButton>
      <ClickedButton onClick={goTea}><RiCake3Fill size="25"/>푸드</ClickedButton>
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