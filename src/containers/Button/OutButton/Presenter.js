import React from "react";
import styled from "styled-components";
import {BiCoffeeTogo} from "react-icons/bi"

const OutButtonPresenter = (props) => {
  const { onOrder } = props;
  return (
    <Wrapper>
      <Button onClick={onOrder}>
        <BiCoffeeTogo size="90"/>
        <ButtonStr>포장<br/>(테이크아웃)</ButtonStr>
        </Button>
    </Wrapper>
  );
};

export default OutButtonPresenter;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Button = styled.button`
width: 140px;
height: 330px;
  border-radius: 15px;
  line-height: 1.5;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-color: #86B1E5;
  color: #86B1E5;
`;

const ButtonStr = styled.p`
font-size: 18px;
`;