import React from "react";
import styled from "styled-components";
import Header from "../../containers/Header";

function TeaPresenter() {
  return (
    <Wrapper>
    <Header/>
    Tea
    </Wrapper>
  );
}

export default TeaPresenter;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;