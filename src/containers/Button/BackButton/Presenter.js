import React from "react";
import styled from "styled-components";
import {AiOutlineLeft} from "react-icons/ai"

const BackButtonPresenter = (props) => {
  const { goBack } = props;
  return (
    <Wrapper>
      <Button onClick={goBack}>
      <AiOutlineLeft size="25" color="white"/>
      </Button>  
    </Wrapper>
  );
};

export default BackButtonPresenter;

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  padding-top:5px;
`;

const Button = styled.button`
border: none;
background-color: transparent;
`;