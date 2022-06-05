import React from "react";
import styled from "styled-components";
import OrderImg from "../../assets/OrderImg.jpg"

const OrderPresenter = () => {

  return (
    <Wrapper>
      <Header>주문하기</Header>
      <OrderPage src={OrderImg}></OrderPage>
    </Wrapper>
  );
}

export default OrderPresenter;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Header = styled.div`
font-size: 30px;
`;

const OrderPage = styled.img`
width:280px;
border: 1px solid black;
border-radius: 12px;
`;