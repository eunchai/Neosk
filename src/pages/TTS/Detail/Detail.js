import React from "react";
import styled from "styled-components";
import AddSubButton from "../../../containers/Button/AddSubButton";
import BackButton from "../../../containers/Button/BackButton";
import CartButtonTTS from "../../../containers/Button/CartButtonTTS";
import OrderButton from "../../../containers/Button/OrderButton";

const DetailPresenter = () => {
  const menu = [{"id":378,"name":"딸기주스 190ML","description":"달콤한 국내산 딸기의 과육이 듬뿍 느껴지는 주스","price":3900,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[5210008070]_20190627152902132.jpg","kcal":100}]

  return (
    <Wrapper>
      <BackButton/>
        {menu.map(menu => (
          <ListWrapper key={menu.id} id={menu.id}>
            <StrWrapper>
            <MenuName>{menu.name}</MenuName>
            <MenuKcal>{menu.kcal}kcal</MenuKcal>
            <MenuDescription>{menu.description}</MenuDescription>
            <MenuPrice>{menu.price}원</MenuPrice>
            <MenuThumb src={menu.image} />
            <AddSubButton/>
          </StrWrapper>
          </ListWrapper>
        ))}
        <OrderTab>
          <CartButtonTTS/>
          <OrderButton/>
        </OrderTab>
    </Wrapper>
  );
}

export default DetailPresenter;

const Wrapper = styled.div`
`;

const ListWrapper = styled.div`
padding-top: 50px;
  display: flex;
`;

const MenuThumb = styled.img`
margin: 25px 0 20px 0;
border-radius: 15px;
`;

const StrWrapper = styled.div`
  margin: 15px;
  font-size: 15px;
  display: flex;
    flex-direction: column;
  align-items: center;
`;

const MenuName = styled.div`
  font-size: 50px;
`;

const MenuKcal = styled.div`
  font-size: 25px;
`;

const MenuDescription = styled.div`
font-size: 30px;
padding-top: 10px;
text-align: center;
`;

const MenuPrice = styled.div`
padding-top: 10px;
font-size: 25px;
float: right;
`;

// const AddSubWrapper = styled.div`
// float:right;
// //margin-right: 10px;
// `;

const OrderTab = styled.div`
display: flex;
justify-content: space-evenly;
bottom:0;
box-shadow: 0px -12px 18px #DCE4ED;
position: fixed;
width: 330px;
padding:20px 0px 20px 80px;
`;