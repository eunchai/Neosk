import React from "react";
import styled from "styled-components";
import logo from "../../assets/neosk.png"

const Wrapper = styled.div`
padding-top: 10px;
width: 100%;
text-align: right;
position: fixed;
background-color: #86B1E5;
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