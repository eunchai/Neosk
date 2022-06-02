import React from "react";
import styled from "styled-components";
import LogoHeader from "../../containers/LogoHeader";
import CoffeeBar from "../../containers/CoffeeBar";

function CoffeePresenter() {
  const menu = [{"id":378,"name":"딸기주스 190ML","description":"달콤한 국내산 딸기의 과육이 듬뿍 느껴지는 주스","price":3900,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[5210008070]_20190627152902132.jpg","kcal":100},{"id":379,"name":"망고주스 190ML","description":"노랗게 익은 열대과일 망고가 입안 가득 느껴지는 주스","price":3200,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[5210008061]_20190627152423110.jpg","kcal":112},{"id":380,"name":"수박주스 190ML","description":"수박의 시원함과 달콤함이 풍성하게 느껴지는 주스","price":9000,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[9300000002115]_20190626101440361.jpg","kcal":90},{"id":381,"name":"케일\u0026사과주스 190ML","description":"국내산 케일과 사과의 달콤함이 조화로운 녹색 주스","price":3900,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[5210008072]_20190627153051152.jpg","kcal":135},{"id":382,"name":"토마토주스 190ML","description":"국내산 토마토의 풍성한 과육이 듬뿍 담겨있는 주스","price":3600,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[5210008074]_20190627153254154.jpg","kcal":70},{"id":383,"name":"한라봉주스 190ML","description":"새콤달콤한 황금빛 제주 한라봉을 그대로 담아낸 주스","price":6000,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[5210008055]_20190627152214722.jpg","kcal":88},{"id":384,"name":"햇사과 주스 190ML","description":"햇사과 1개 반을 껍질 그대로 착즙한 사과 주스.\r\n달콤새콤한 사과 주스를 신선하게 즐겨 보세요.","price":6500,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/12/[9300000002565]_20191205134634839.jpg","kcal":113},{"id":385,"name":"블루베리 요거트 190ML","description":"블루베리 과육이 입안 가득 느껴지는 마시는 요거트","price":6700,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[5210008063]_20190627152600362.jpg","kcal":155},{"id":386,"name":"치아씨드 요거트 190ML","description":"톡톡 터지는 치아 씨드가 입안 가득 느껴지는 마시는 요거트","price":2500,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[5210008064]_20190627152728521.jpg","kcal":145}]
  return (
    <Wrapper>
      <LogoHeader/>
      <MenuWrapper >
        <CoffeeBar/>
        <MenuList>
        {menu.map(menu => (
          <ListWrapper key={menu.id} id={menu.id}>
            <MenuThumb src={menu.image} />
            <StrWrapper>
            <MenuName>{menu.name}</MenuName>
            <MenuDescription>
              {menu.price}원
              </MenuDescription>
          </StrWrapper>
          </ListWrapper>
        ))}
        </MenuList>
    </MenuWrapper>
    </Wrapper>
  );
}

export default CoffeePresenter;

const Wrapper = styled.div`
  /* justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column; */
`;

const MenuWrapper = styled.div`
  display: flex;
`;

const MenuList = styled.div`
  border-left: 1.5px solid lightgray;
`;

const ListWrapper = styled.div`
  display: flex;
  border: 1px solid #181716;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
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
  font-size: 15px;
  padding-bottom: 12px;
`;

const MenuDescription = styled.div``;