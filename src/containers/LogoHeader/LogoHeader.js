import React from "react";
import styled from "styled-components";
import logo from "../../assets/neosk.png"

const Wrapper = styled.div`
height: 64px;
width: 100%;
position: fixed;
background-color: #86B1E5;
font-size: 30px;
align-items: center;
display: flex;
flex-direction: row-reverse;
`;

const LogoImg = styled.img`
width:30px;
height:30px;
padding:5px 18px 0 9px;
`;

const Logo = styled.div`
`;

const Header = () => (
<Wrapper>
  <Logo>
  NEOSK
  <LogoImg alt="Logo" src={logo}/>
  </Logo>
  </Wrapper>
);

export default Header;