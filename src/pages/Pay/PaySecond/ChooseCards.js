import React from "react";
import styled from "styled-components";
import PaymentPage from "../../../assets/PaymentPage.jpg"
import BankCards from "../../../assets/BankCards.jpg"
import { useHistory } from "react-router-dom";

const OrderPresenter = () => {
  const history = useHistory();
  const goPay = () => {
    history.push("/pay");
    history.go(0)
  };

  return (
    <Wrapper>
      <Background src={PaymentPage}></Background>
      <CardsWrapper>
        <StrBold>17,800원</StrBold>
      <Background src={BankCards}></Background>
      <Str>카카오페이 체크카드</Str>
      <Button onClick={goPay}>결제하기</Button>
       </CardsWrapper>
    </Wrapper>
  );
}

export default OrderPresenter;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #FFFFFF;
height:740px;
`;

const Background = styled.img`
width:360px;
`;

const CardsWrapper = styled.div`
position: fixed;
background-color: white;
width: 360px;
display: flex;
flex-direction: column;
align-items: center;
bottom: 0;
border-top-left-radius: 25px;
border-top-right-radius: 25px;
`;

const Button = styled.button`
width:320px;
height: 45px;
border-radius: 40px;
  font-size: 15px;
  line-height: 1.5;
  background-color: #f54269;
  border: 1px solid #f54269;
  color: #FFFFFF;
  margin: 25px;
  font-weight: bold;
`;

const Str = styled.div`
font-size: 14px;
text-align: center;
margin: 15px 15px 150px 15px;
`;

const StrBold = styled.div`
font-size: 25px;
font-weight: bold;
margin: 40px 0px 10px -200px;
`;