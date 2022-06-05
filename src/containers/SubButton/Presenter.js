import React from "react";
import styled from "styled-components";
import {AiOutlineMinusCircle} from "react-icons/ai"

const MinusButtonPresenter = () => {
  return (
    <Wrapper>
      <AiOutlineMinusCircle size="24"/>
    </Wrapper>
  );
};

export default MinusButtonPresenter;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;