import React from "react";
import styled from "styled-components";
import AddSubButton from "../../../containers/Button/AddSubButton";
import LogoHeader from "../../../containers/LogoHeader";
import { useHistory } from "react-router-dom";
import BackButton from "../../../containers/Button/BackButton";

const DrinkPresenter = (props) => {
  const menu = [{"id":378,"name":"딸기주스 190ML","description":"달콤한 국내산 딸기의 과육이 듬뿍 느껴지는 주스","price":3900,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[5210008070]_20190627152902132.jpg","kcal":100},{"id":281,"name":"아이스 카페 라떼","description":"에스프레소 샷과 시원한 우유와 얼음으로 고소한 음료.","price":5500,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2015/08/[110569]_20150813221315558.jpg","kcal":110},{"id":420,"name":"레드벨벳 크림치즈 케이크","description":"레드벨벳 시트 사이에 크림치즈 무스를 샌드한 케이크입니다.","price":8400,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2015/10/[5110007192]_20151002104431160.jpg","kcal":466}]

  const history = useHistory();
  const onOrder = () => {
    history.push("/order");
    history.go(0)
  };
  return (
    <>
    <LogoHeader/>
    <BackButton/>
    <Wrapper>
        {menu.map(menu => (
          <ListWrapper key={menu.id} id={menu.id}>
            <StrWrapper>
            <MenuName>{menu.name}</MenuName>
            <AddSubButton/>
            </StrWrapper>
            <MenuPrice>
            {menu.price}원
          </MenuPrice>
          </ListWrapper>
        ))}
        <OrderTab>
          <PriceWrapper>
            <ProductStr>총 3개</ProductStr>
            <PriceStr>17,800원</PriceStr>
            </PriceWrapper>
        <Button onClick={onOrder}>주문하기</Button>
        </OrderTab>
    </Wrapper>
    </>
  );
}

export default DrinkPresenter;

const Wrapper = styled.div`
padding-top:70px;
`;

const ListWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #DCE4ED;
  padding: 10px;
  margin: 10px;
  flex-direction: column;
  align-items:center ;
`;

const StrWrapper = styled.div`
  margin: 15px;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
`;

const MenuName = styled.div`
  font-size: 20px;
  width:220px;
`;

const MenuPrice = styled.div`
  font-size: 20px;
  padding: 10px;
`;

const OrderTab = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
bottom:0;
box-shadow: 0px -12px 18px #DCE4ED;
padding:20px;
width: 371px;
`;

const PriceWrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 320px;
padding-bottom:10px;
`;

const ProductStr = styled.div`
font-size: 17px;
color: #86B1E5;
`;

const PriceStr = styled.div`
font-size: 28px;
`;

const Button = styled.button`
width: 300px;
height: 45px;
  border-radius: 40px;
  font-size: 15px;
  line-height: 1.5;
  background-color: #86B1E5;
  border: 1px solid #86B1E5;
  color: #FFFFFF;
  font-weight: bold;
`;