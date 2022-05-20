import React from "react";
import styled from "styled-components";

const MenuPresenter = (props) => {
  const { goCoffee, goTea, goDessert } = props;
  return (
    <Wrapper>
      <Button onClick={goCoffee}>음료</Button>
      <Button onClick={goTea}>푸드</Button>
      <Button onClick={goDessert}>상품</Button>
    </Wrapper>
  );
};
export default MenuPresenter;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  border-radius: 5px;
  font-size: 19px;
  margin: 5px;
  margin-left: -35px;
  width: 130px;
  height: 50px;
  text-align: right;
`;