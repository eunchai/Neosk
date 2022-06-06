import React from "react";
import styled from "styled-components";
import {HiOutlineHome} from "react-icons/hi"

const MainButtonPresenter = (props) => {
  const { goHome } = props;
  return (
    <Wrapper>
      <Button onClick={goHome}>
        <HiOutlineHome size="25" /><br/>
        초기화면
        </Button>
    </Wrapper>
  );
};

export default MainButtonPresenter;

const Wrapper = styled.div`
`;

const Button = styled.button`
width: 85px;
  height: 70px;
  border-radius: 5px;
  font-size: 15px;
  padding:5px;
  background-color: white;
`;