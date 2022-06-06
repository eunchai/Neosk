import React from "react";
import styled from "styled-components";
import AddSubButton from "../../containers/Button/AddSubButton";
import CartButton from "../../containers/Button/CartButton";
import OrderButton from "../../containers/Button/OrderButton";

const DetailPresenter = () => {
  const menu = [{"id":378,"name":"딸기주스 190ML","description":"달콤한 국내산 딸기의 과육이 듬뿍 느껴지는 주스","price":3900,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[5210008070]_20190627152902132.jpg","kcal":100}]

  return (
    <Wrapper>
        {menu.map(menu => (
          <ListWrapper key={menu.id} id={menu.id}>
            <MenuThumb src={menu.image} />
            <StrWrapper>
            <MenuName>{menu.name}</MenuName>
            <MenuKcal>{menu.kcal}kcal</MenuKcal>
            <MenuDescription>{menu.description}</MenuDescription>
            <MenuPrice>{menu.price}원</MenuPrice>
            <AddSubButton/>
          </StrWrapper>
          </ListWrapper>
        ))}
        <OrderTab>
          <CartButton/>
          <OrderButton/>
        </OrderTab>
    </Wrapper>
  );
}

export default DetailPresenter;

const Wrapper = styled.div`
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuThumb = styled.img`
`;

const StrWrapper = styled.div`
  margin: 15px;
  font-size: 15px;
`;

const MenuName = styled.div`
  font-size: 25px;
`;

const MenuKcal = styled.div`
  font-size: 13px;
`;

const MenuDescription = styled.div`
font-size: 13px;
padding-top: 10px;
`;

const MenuPrice = styled.div`
font-size: 25px;
padding: 10px 0px 10px 0px;
`;

const OrderTab = styled.div`
display: flex;
justify-content: space-evenly;
bottom:0;
box-shadow: 0px -12px 18px #DCE4ED;
position: fixed;
width: 280px;
padding:20px 0px 20px 80px;
`;