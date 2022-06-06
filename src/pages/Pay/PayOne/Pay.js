import React from "react";
import styled from "styled-components";
import Paybook from "../../../assets/Paybook.jpg"
import { useHistory } from "react-router-dom";
import BackButton from "../../../containers/Button/BackButton";

const OrderPresenter = () => {
  const history = useHistory();
  const goPay = () => {
    history.push("/payments");
    history.go(0)
  };

  return (
    <Wrapper>
      <Header><BackButton/>신용카드 인증</Header>
      <PbLogo src={Paybook}></PbLogo>
      <Button onClick={goPay}>결제하기</Button>
      <StrWrapper>
      <Str>아직 페이북 앱이 없다면</Str>
       <StrBold>다운로드</StrBold>
       </StrWrapper>
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

const Header = styled.div`
padding: 10px;
width: 100%;
text-align: center;
position: fixed;
background-color: #86B1E5;
font-size: 25px;
color: white;
`;

const PbLogo = styled.img`
width:150px;
margin: 50px 0px 0px -190px;
`;

const Button = styled.button`
margin-top: 30px;
width:320px;
height: 45px;
border-radius: 40px;
  font-size: 15px;
  line-height: 1.5;
  background-color: #f54269;
  border: 1px solid #f54269;
  color: #FFFFFF;
  font-weight: bold;
`;
const StrWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width:300px;
padding-top:30px;
`;

const Str = styled.div`
font-size: 14px;
`;

const StrBold = styled.div`
font-size: 14px;
font-weight: bold;
text-decoration-line: underline;
`;