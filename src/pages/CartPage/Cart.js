import React from "react";
import styled from "styled-components";
import AddButton from "../../containers/AddButton";
import OrderButton from "../../containers/OrderButton";
import MinusButton from "../../containers/SubButton/SubButton";

const DrinkPresenter = (props) => {
  const menu = [{"id":378,"name":"딸기주스 190ML","description":"달콤한 국내산 딸기의 과육이 듬뿍 느껴지는 주스","price":3900,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[5210008070]_20190627152902132.jpg","kcal":100}]

  return (
    <Wrapper>
      <MenuHeader>주문 메뉴</MenuHeader>
      
        {menu.map(menu => (
          <ListWrapper key={menu.id} id={menu.id}>
            <MenuThumb src={menu.image} />
            <StrWrapper>
            <MenuName>{menu.name}</MenuName>
            <NumberTab>
            <MenuPrice>{menu.price}원</MenuPrice>
            <NumberWrapper>
        <MinusButton/> 1
          <AddButton/>
          </NumberWrapper>
          </NumberTab>
          </StrWrapper>
          </ListWrapper>
        ))}
        <OrderTab>
          <OrderButton/>
        </OrderTab>
    </Wrapper>
  );
}

export default DrinkPresenter;

const Wrapper = styled.div`
`;

const MenuHeader = styled.div`
font-size: 25px;
`;

const ListWrapper = styled.div`
  display: flex;
  border: 1px solid #181716;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
`;

const MenuThumb = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;

const StrWrapper = styled.div`
  margin: 15px;
  font-size: 15px;
`;

const MenuName = styled.div`
  font-size: 25px;
`;

const MenuPrice = styled.div`
font-size: 15px;
padding-top: 10px;
`;

const OrderTab = styled.div`
display: flex;
justify-content: space-evenly;
padding-left: 95px;
`;

const NumberTab = styled.div`
display: flex;
//width: 90px;
justify-content: space-between;
`;

const NumberWrapper = styled.div`
display: flex;
width: 90px;
justify-content: space-around;
`;