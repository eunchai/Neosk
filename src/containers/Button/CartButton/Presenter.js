import React from "react";
import styled from "styled-components";

const CartButtonPresenter = (props) => {
  const { onOrder } = props;
  return (
    <Wrapper>
      <Button onClick={onOrder}>담기</Button>
    </Wrapper>
  );
};

export default CartButtonPresenter;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Button = styled.button`
width: 80px;
height: 45px;
  border-radius: 40px;
  font-size: 15px;
  line-height: 1.5;
  background-color: #FFFFFF;
  border: 1px solid #86B1E5;
  color: #86B1E5;
`;