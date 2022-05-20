import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.header`
  color: #181716;
  width: 100%;
  display: flex;
 // justify-content: space-evenly;
 // float: right;
  box-shadow: 0px 1px 5px 2px #181716;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 100px;
  text-align: center;
  //transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;

const H1 = styled.h1`
  font-size: 35px;
`;

const Header = withRouter(({ location: { pathname } }) => (
    <>
  <Wrapper>
    <H1>Neosk</H1>
    </Wrapper>
    <List>
      <Button current={pathname === "/menu_coffee"}>
        <SLink to="/menu_coffee">커피</SLink>
      </Button>
      <Button current={pathname === "/menu_tea"}>
        <SLink to="/menu_tea">차</SLink>
      </Button>
      <Button current={pathname === "/menu_dessert"}>
        <SLink to="/menu_dessert">디저트</SLink>
      </Button>
    </List>
    </>
));

export default Header;