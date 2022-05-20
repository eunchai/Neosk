import React from "react";
import styled from "styled-components";
import LogoHeader from "../../containers/LogoHeader";
import MenuBar from "../../containers/MenuBar";

function CoffeePresenter() {
  return (
    <Wrapper>
      <LogoHeader/>
      <MenuWrapper >
        <MenuBar/>
        Coffee Page!
    </MenuWrapper>
    </Wrapper>
  );
}

export default CoffeePresenter;

const Wrapper = styled.div`
  /* justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column; */
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width:100%;
`;