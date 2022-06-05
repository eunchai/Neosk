import React from "react";
import styled from "styled-components";
import {AiOutlinePlusCircle} from "react-icons/ai"

const AddButtonPresenter = () => {
  return (
    <Wrapper>
      <AiOutlinePlusCircle size="24"/>
    </Wrapper>
  );
};

export default AddButtonPresenter;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;