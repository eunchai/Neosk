import React from "react";
import styled from "styled-components";
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai"

const AddButtonPresenter = () => {
  return (
    <Wrapper>
      <AiOutlineMinusCircle size="24" color="#86B1E5"/> 1 <AiOutlinePlusCircle size="24" color="#86B1E5"/>      
    </Wrapper>
  );
};

export default AddButtonPresenter;

const Wrapper = styled.div`
  justify-content: space-between;
  display: flex;
  width: 90px;
`;