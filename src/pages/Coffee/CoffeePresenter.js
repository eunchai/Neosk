import React from "react";
import styled from "styled-components";
import Header from "../../containers/Header";

function CoffeePresenter() {
  return (
    <Wrapper>
    <Header/>
    Coffee
    </Wrapper>
  );
}

export default CoffeePresenter;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;