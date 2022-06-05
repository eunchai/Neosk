import React from "react";
import styled from "styled-components";
import AddButton from "../../containers/AddButton";
import CartButton from "../../containers/CartButton";
import OrderButton from "../../containers/OrderButton";
import MinusButton from "../../containers/SubButton/SubButton";

const DrinkPresenter = (props) => {
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
          </StrWrapper>
          </ListWrapper>
        ))}
        <NumberTab>
        <MinusButton/> 1
          <AddButton/>
          </NumberTab>
        <OrderTab>
          <CartButton/>
          <OrderButton/>
        </OrderTab>
    </Wrapper>
  );
}

export default DrinkPresenter;

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
padding-top: 10px;
`;

const OrderTab = styled.div`
display: flex;
justify-content: space-evenly;
padding-left: 95px;
`;

const NumberTab = styled.div`
display: flex;
width: 90px;
justify-content: space-around;
`;