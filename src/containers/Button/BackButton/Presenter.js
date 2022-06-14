import React from "react";
import styled from "styled-components";
import {AiOutlineLeft} from "react-icons/ai"

const BackButtonPresenter = (props) => {
  const { onBackPage } = props;
  return (
    <Wrapper>
      <Button onClick={onBackPage}>
      <AiOutlineLeft size="25" color="white"/>
      </Button>
    </Wrapper>
  );
};
export default BackButtonPresenter;

const Wrapper = styled.div`
  display: flex;
  position: fixed;
`;

const Button = styled.button`
border: none;
background-color: transparent;
`;