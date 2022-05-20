import React from "react";
import styled from "styled-components";
import Header from "../../containers/Header";

function DessertPresenter() {
  return (
    <Wrapper>
    <Header/>
    Dessert page!
    </Wrapper>
  );
}

export default DessertPresenter;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;