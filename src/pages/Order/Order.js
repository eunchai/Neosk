import React from "react";
import styled from "styled-components";
import OrderImg from "../../assets/OrderImg.jpg"
import { useHistory } from "react-router-dom";
import BackButton from "../../containers/Button/BackButton";

const OrderPresenter = () => {
  const history = useHistory();
  const goPay = () => {
    history.push("/pay");
    history.go(0)
  };

  return (
    <Wrapper>
      <Header><BackButton/>주문하기</Header>
      <OrderPage src={OrderImg}></OrderPage>
      <PriceBox><ProductStr>최종 결제금액</ProductStr>
            <PriceStr>17,800원</PriceStr></PriceBox>
            <Button onClick={goPay}>결제하기</Button>
    </Wrapper>
  );
}

export default OrderPresenter;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #DCE4ED;
height: 900px;
`;

const Header = styled.div`
padding: 10px;
width: 100%;
text-align: center;
position: fixed;
background-color: #86B1E5;
font-size: 25px;
color: white;
`;

const OrderPage = styled.img`
width:320px;
border: 1px solid lightgrey;
border-radius: 12px;
margin-top: 70px;
`;

const PriceBox = styled.div`
width:320px;
border: 1px solid lightgrey;
border-radius: 12px;
background-color: white;
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 10px;
padding:10px 0px 10px 0px;
`;

const ProductStr = styled.div`
font-size: 16px;
`;

const PriceStr = styled.div`
font-size: 25px;
`;

const Button = styled.button`
margin: 30px 0px 60px 0px;
width:320px;
height: 45px;
border-radius: 12px;
  font-size: 15px;
  line-height: 1.5;
  background-color: #86B1E5;
  border: 1px solid #86B1E5;
  color: #FFFFFF;
  font-weight: bold;
`;