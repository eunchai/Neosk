import React from "react";
import styled from "styled-components";

const OutButtonPresenter = (props) => {
  const { onOrder } = props;
  return (
    <Wrapper>
      <Button onClick={onOrder}>포장(테이크아웃)</Button>
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
  font-size: 15px;
  line-height: 1.5;
  background-color: #FFFFFF ;
`;