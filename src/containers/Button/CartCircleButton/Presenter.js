import React from "react";
import styled from "styled-components";
import {AiOutlineShopping} from "react-icons/ai"

const CartButtonPresenter = (props) => {
  const { goCart } = props;
  return (
    <Wrapper>
      <Button onClick={goCart}>
      <AiOutlineShopping size="25" color="white" />
      </Button>
    </Wrapper>
  );
};

export default CartButtonPresenter;

const Wrapper = styled.div`
display: flex;
bottom: 0;
  position: fixed;
  right: 0;
  margin : 30px;
`;

const Button = styled.button`
padding:13px;
  border-radius: 50%;
  background-color: #86B1E5;
  border: none;
`;