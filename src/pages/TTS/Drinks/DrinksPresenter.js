import React from "react";
import styled from "styled-components";
import LogoHeader from "../../../containers/LogoHeader";
import TTSBar from "../../../containers/Bar/TTSBar";

const DrinkPresenter = (props) => {
  const menu = [{"id":378,"name":"딸기주스 190ML","description":"달콤한 국내산 딸기의 과육이 듬뿍 느껴지는 주스","price":3900,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[5210008070]_20190627152902132.jpg","kcal":100},{"id":379,"name":"망고주스 190ML","description":"노랗게 익은 열대과일 망고가 입안 가득 느껴지는 주스","price":3200,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[5210008061]_20190627152423110.jpg","kcal":112},{"id":380,"name":"수박주스 190ML","description":"수박의 시원함과 달콤함이 풍성하게 느껴지는 주스","price":9000,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[9300000002115]_20190626101440361.jpg","kcal":90},{"id":381,"name":"케일\u0026사과주스 190ML","description":"국내산 케일과 사과의 달콤함이 조화로운 녹색 주스","price":3900,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[5210008072]_20190627153051152.jpg","kcal":135},{"id":382,"name":"토마토주스 190ML","description":"국내산 토마토의 풍성한 과육이 듬뿍 담겨있는 주스","price":3600,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[5210008074]_20190627153254154.jpg","kcal":70},{"id":383,"name":"한라봉주스 190ML","description":"새콤달콤한 황금빛 제주 한라봉을 그대로 담아낸 주스","price":6000,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[5210008055]_20190627152214722.jpg","kcal":88},{"id":384,"name":"햇사과 주스 190ML","description":"햇사과 1개 반을 껍질 그대로 착즙한 사과 주스.\r\n달콤새콤한 사과 주스를 신선하게 즐겨 보세요.","price":6500,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/12/[9300000002565]_20191205134634839.jpg","kcal":113},{"id":385,"name":"블루베리 요거트 190ML","description":"블루베리 과육이 입안 가득 느껴지는 마시는 요거트","price":6700,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[5210008063]_20190627152600362.jpg","kcal":155},{"id":386,"name":"치아씨드 요거트 190ML","description":"톡톡 터지는 치아 씨드가 입안 가득 느껴지는 마시는 요거트","price":2500,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[5210008064]_20190627152728521.jpg","kcal":145},{"id":249,"name":"나이트로 바닐라 크림","description":"부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에 느껴보세요!","price":6700,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/09/[9200000002487]_20190919181354811.jpg","kcal":75},{"id":250,"name":"초콜릿 블랙 콜드 브루","description":"달콤한 초콜릿과 정성스레 내린 콜드 브루와의 진한 만남\r\n부드러운 초콜릿 콜드 폼과 콜드 브루가 만나 진한 초콜릿 풍미와 바디감이 입안을 기분 좋게 감싸는, 초콜릿 블랙 콜드브루","price":9500,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2020/05/[9200000002742]_20200504090457274.jpg","kcal":235},{"id":251,"name":"코코넛 화이트 콜드 브루","description":"고소한 코코넛과 정성스레 내린 콜드 브루와의 풍미좋은 만남\r\n코코넛으로 만든 달콤하고 부드러운 크림 폼과 콜드 브루의 감칠맛이 깔끔하게 올라오는,\r\n코코넛 화이트 콜드브루","price":2700,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2020/04/[9200000002739]_20200403131524542.jpg","kcal":415},{"id":252,"name":"나이트로 쇼콜라 클라우드","description":"초콜릿과 견과류의 풍미, 초콜릿 파우더 토핑, 하프\u0026하프 샷\r\n부드럽고 달콤한 새로운 나이트로 콜드 브루","price":2700,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/04/[9200000001275]_20180409150826087.jpg","kcal":55},{"id":253,"name":"나이트로 콜드 브루","description":"나이트로 커피 정통의 캐스케이딩과 부드러운 콜드 크레마!\r\n부드러운 목 넘김과 완벽한 밸런스에 커피 본연의 단맛을 경험할 수 있습니다.\r\n","price":5400,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2017/03/[9200000000479]_20170328134443491.jpg","kcal":5},{"id":254,"name":"돌체 콜드 브루","description":"무더운 여름철, \r\n동남아 휴가지에서 즐기는 커피를 떠오르게 하는 \r\n스타벅스 음료의 베스트 x 베스트 조합인\r\n돌체 콜드 브루를 만나보세요! ","price":5300,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/04/[9200000002081]_20190409153909754.jpg","kcal":265},{"id":255,"name":"바닐라 크림 콜드 브루","description":"콜드 브루에 더해진 바닐라 크림으로 깔끔하면서 달콤한 콜드 브루를 새롭게 즐길 수 있는 음료입니다.","price":7200,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2017/04/[9200000000487]_20170405152830656.jpg","kcal":125},{"id":256,"name":"제주 비자림 콜드 브루","description":"[제주지역 한정음료] 제주 천년의 숲 비자림을 연상시키는 \r\n음료로 제주에서 유기농 말차로 만든 \r\n파우더와 Cold Brew를 활용한 음료.\r\n더욱 시원하고 새로운 Cold Brew를 제주에서 즐겨보세요.","price":4400,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2020/02/[9200000002672]_20200220135658603.jpg","kcal":340},{"id":257,"name":"콜드 브루","description":"스타벅스 바리스타의 정성으로 탄생한 콜드 브루!\r\n\r\n콜드 브루 전용 원두를 차가운 물로 14시간 동안 추출하여 한정된 양만 제공됩니다.\r\n깊은 풍미의 새로운 커피 경험을 즐겨보세요.","price":1800,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2016/04/[9200000000038]_20160408135802583.jpg","kcal":5},{"id":258,"name":"콜드 브루 몰트","description":"[리저브 전용음료] 리저브 콜드 브루, 바닐라 아이스크림, 몰트가 블렌딩된 리저브만의 쉐이크\r\n","price":6800,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/07/[9200000001636]_20180726125512959.jpg","kcal":510}]

  const {onClickDetail} = props;
  return (
    <Wrapper>
      <LogoHeader/>
      <MenuWrapper >
        <TTSBar/>
        <MenuList>
        {menu.map(menu => (
          <ListWrapper key={menu.id} id={menu.id} onClick={onClickDetail}>
            <StrWrapper>
            <MenuName>
              {menu.name}
              </MenuName>
            <Price>
            {menu.price}원
            </Price>
            
          </StrWrapper>
          </ListWrapper>
        ))}
        </MenuList>
    </MenuWrapper>
    </Wrapper>
  );
}

export default DrinkPresenter;

const Wrapper = styled.div`
`;

const MenuWrapper = styled.div`
padding-top:54px;
background-color: #DCE4ED;
`;

const MenuList = styled.div`
  border-left: 1.5px solid lightgray;
  margin-left: 100px;
  background-color: #FFFFFF;
`;

const ListWrapper = styled.div`
  display: flex;
  border: 1px solid #181716;
  border-radius: 8px;
  margin: 10px;
  cursor: pointer;
`;

const StrWrapper = styled.div`
  margin: 15px;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 260px;
`;

const MenuName = styled.div`
`;

const Price = styled.div`
`;