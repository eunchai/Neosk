import React from "react";
import styled from "styled-components";
import InButton from "../../containers/InButton";
import OutButton from "../../containers/OutButton";

const MainPresenter = () => {
  return (
    <Wrapper>
      <Logo>Neosk</Logo>
      <ButtonWrapper>
      <InButton></InButton>
      <OutButton></OutButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default MainPresenter;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h1`
  font-size: 35px;
`;

const ButtonWrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
`;