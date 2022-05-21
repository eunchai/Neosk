import React from "react";
import styled from "styled-components";
import LogoHeader from "../../containers/LogoHeader";
import DessertBar from "../../containers/DessertBar";

function DessertPresenter() {
  return (
    <Wrapper>
      <LogoHeader/>
      <MenuWrapper >
        <DessertBar/>
        <MenuList>
        Dessert
        </MenuList>
    </MenuWrapper>
    </Wrapper>
  );
}

export default DessertPresenter;

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
  width: 100%;
  margin-top: 10px;
`;

const MenuList = styled.div`
  border-left: 1.5px solid lightgray;
  //height:100%;
`;