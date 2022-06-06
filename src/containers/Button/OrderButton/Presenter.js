import React from "react";
import styled from "styled-components";

const OrderButtonPresenter = (props) => {
  const { onOrder } = props;
  return (
    <Wrapper>
      <Button onClick={onOrder}>주문하기</Button>
    </Wrapper>
  );
};

export default OrderButtonPresenter;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Button = styled.button`
width: 140px;
height: 45px;
  border-radius: 40px;
  font-size: 15px;
  line-height: 1.5;
  background-color: #86B1E5;
  border: 1px solid #86B1E5;
  color: #FFFFFF;
  font-weight: bold;
`;