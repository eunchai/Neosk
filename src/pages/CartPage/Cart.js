import React from "react";
import styled from "styled-components";
import AddSubButton from "../../containers/Button/AddSubButton";
import OrderButton from "../../containers/Button/OrderButton";
import LogoHeader from "../../containers/LogoHeader";

const DrinkPresenter = (props) => {
  const menu = [{"id":378,"name":"딸기주스 190ML","description":"달콤한 국내산 딸기의 과육이 듬뿍 느껴지는 주스","price":3900,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[5210008070]_20190627152902132.jpg","kcal":100},{"id":281,"name":"아이스 카페 라떼","description":"에스프레소 샷과 시원한 우유와 얼음으로 고소한 음료.","price":5500,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2015/08/[110569]_20150813221315558.jpg","kcal":110},{"id":420,"name":"레드벨벳 크림치즈 케이크","description":"레드벨벳 시트 사이에 크림치즈 무스를 샌드한 케이크입니다.","price":8400,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2015/10/[5110007192]_20151002104431160.jpg","kcal":466}]

  return (
    <Wrapper>
      <LogoHeader/>
      <MenuHeader>주문 메뉴</MenuHeader>
      
        {menu.map(menu => (
          <ListWrapper key={menu.id} id={menu.id}>
            <MenuThumb src={menu.image} />
            <StrWrapper>
            <MenuName>{menu.name}</MenuName>

            <MenuPrice>{menu.price}원</MenuPrice>
            <NumberWrapper>
        <AddSubButton/>
          </NumberWrapper>
       
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
display: flex;
flex-direction: column;
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
  font-size: 20px;
  width:220px;
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

// const NumberTab = styled.div`
// display: flex;
// //width: 90px;
// justify-content: space-between;
// `;

const NumberWrapper = styled.div`
padding-top: 10px;
display: flex;
float: right;
`;