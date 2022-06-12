import React from "react";
import styled from "styled-components";

const TtsButtonPresenter = (props) => {
  const { onOrder } = props;
  return (
    <Wrapper>
      <Button onClick={onOrder}>저시력자용 TTS</Button>
    </Wrapper>
  );
};
export default TtsButtonPresenter;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Button = styled.button`
margin: 40px 0px 70px 0px;
width: 150px;
  height: 50px;
  border-radius: 10px;
  font-size: 15px;
  border-color: #86B1E5;
  color: #86B1E5;
  background-color: #FFFFFF;
  font-weight: bold;
`;