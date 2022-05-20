import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.div`
margin: 15px 0px 15px 0px;
width: 100%;
border-bottom: 1.5px solid;
text-align: right;
`;

const SLink = styled(Link)`
  font-size: 30px;
  text-decoration: none;
  padding-right: 15px;
`;

const Header = withRouter(({ location: { pathname } }) => (
<Logo current={pathname === "/"}>
  <SLink to="/">Neosk</SLink>
  </Logo>
));

export default Header;