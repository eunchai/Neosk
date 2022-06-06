import React from "react";
import styled from "styled-components";
import InButton from "../../containers/Button/InButton";
import LogoHeader from "../../containers/LogoHeader";
import OutButton from "../../containers/Button/OutButton";
import Korean from "../../assets/Korean.svg"
import English from "../../assets/English.svg"
import Chinese from "../../assets/Chinese.svg"
import Japanese from "../../assets/Japanese.svg"
import Spanish from "../../assets/Spanish.svg"
import German from "../../assets/Germany.svg"

const MainPresenter = () => {
  return (
    <Wrapper>
      <LogoHeader/>
      <ButtonWrapper>
      <InButton></InButton>
      <OutButton></OutButton>
      </ButtonWrapper>
      사용할 언어를 선택하여 주십시오. <br/>
      (기본설정 : 사용자 단말기 언어)
      <LangWrapper>
        <Languages alt='한국어' src={Korean} />
        <Languages alt='영어' src={English} />
        <Languages alt='중국어' src={Chinese} />
      </LangWrapper>
      <LangWrapper>
        <Languages alt='일본어' src={Japanese} />
        <Languages alt='스페인어' src={Spanish} />
        <Languages alt='독일어' src={German} />
      </LangWrapper>
      <VoiceButton>저시력자용 TTS</VoiceButton>
    </Wrapper>
  );
}

export default MainPresenter;

const Wrapper = styled.div`
  background-color: #DCE4ED;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
margin: 100px 0px 50px 0px;
`;

const LangWrapper = styled.div`
display: flex;
width: 65%;
justify-content: space-evenly;
margin-top: 15px;
`;

const Languages = styled.img`
width:60px;
`;

const VoiceButton = styled.button`
margin: 30px;
width: 150px;
  height: 50px;
  border-radius: 10px;
  font-size: 15px;
  background-color: #FFFFFF;
`;