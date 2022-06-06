import React from "react";
import styled from "styled-components";
import {IoRestaurant} from "react-icons/io5"

const InButtonPresenter = (props) => {
  const { onOrder } = props;
  return (
    <Wrapper>
      <Button onClick={onOrder}><IoRestaurant size="90"/>
      <ButtonStr>매장 내 식사</ButtonStr>
      </Button>
    </Wrapper>
  );
};
export default InButtonPresenter;

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
  font-weight: bold;
`;

const ButtonStr = styled.p`
font-size: 18px;
`;