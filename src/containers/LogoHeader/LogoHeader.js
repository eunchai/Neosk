import React from "react";
import styled from "styled-components";
import logo from "../../assets/neosk.png"

const Wrapper = styled.div`
margin-top: 15px;
width: 100%;
border-bottom: 1.5px solid lightgray;
text-align: right;
`;

const LogoImg = styled.img`
width:45px;
height:45px;
padding:0px 10px 5px 0px;
`;

const Header = () => (
<Wrapper>
  <LogoImg alt="Logo" src={logo}/>
  </Wrapper>
);

export default Header;