import React from "react";
import styled from "styled-components";
import MainButton from "../../Button/MainButton";

const MenuPresenter = (props) => {
  const { onOrder } = props;
  return (
    <Wrapper>
      <Button>음료</Button>
      <Button>푸드</Button>
      <Button>상품</Button>

      <MainButtonWrapper>
      <CartButton onClick={onOrder}>장바구니</CartButton>
        <MainButton/>
        </MainButtonWrapper>
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

const Button = styled.button`
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
  font-size: 19px;
  margin: 5px 0px 5px 0px;
  width: 85px;
  height: 50px;
  text-align: right;
  background-color: #FFFFFF;
  border-left-color: transparent;
`;

const MainButtonWrapper = styled.div`
position : fixed;
bottom : 0;
margin-bottom: 10px;
`;

const CartButton = styled.button`
border-radius: 5px;
  font-size: 17px;
  margin: 5px 0px 5px 0px;
  width: 85px;
  height: 50px;

  background-color: #FFFFFF;
`;