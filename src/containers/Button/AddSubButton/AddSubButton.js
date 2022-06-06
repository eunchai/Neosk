import React from "react";
import styled from "styled-components";
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai"

const AddButtonPresenter = () => {
  return (
    <Wrapper>
      <AiOutlineMinusCircle size="24"/> 1 <AiOutlinePlusCircle size="24"/>      
    </Wrapper>
  );
};

export default AddButtonPresenter;

const Wrapper = styled.div`
  justify-content: space-around;
  display: flex;
  width: 70px;
`;