import React from "react";
import styled from "styled-components";
import LogoHeader from "../../containers/LogoHeader";
import DessertBar from "../../containers/DessertBar";

function BreadPresenter() {
  const menu = [{"id":387,"name":"초코몬드 카라멜 크림치즈 베이글","description":"폭신하고 쫄깃한 식감의 베이글에 초코 아몬드가 콕콕 박힌 카라멜 크림치즈가 듬뿍 샌드되어 달콤하게 즐길 수 있는 브레드입니다.","price":7300,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2020/05/[9300000002783]_20200513170505148.jpg","kcal":530},{"id":388,"name":"카라멜팅 스콘","description":"흘러내리는 듯한 카라멜 토핑과 아몬드의 식감이 부드러운 스콘에 더해진 달콤하고 고소한 스콘입니다.","price":9300,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2020/05/[9300000002719]_20200508081437430.jpg","kcal":550},{"id":389,"name":"Pick한 시나몬 롤","description":"쌀을 넣어 쫄깃한 식감을 더한 브레드에 진한 시나몬, 크림치즈 버터크림, 고소한 피칸이 조화롭게 어루러져 달콤하게 즐길 수 있는 브레드입니다.","price":1500,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2020/02/[9300000002712]_20200228105957891.jpg","kcal":466},{"id":390,"name":"녹차 머핀","description":"[제주지역 한정푸드] 녹차가루로 만든 머핀 안에 크림치즈와 통팥을 넣은 녹차 머핀입니다.","price":5800,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/05/[9300000001538]_20180528125435774.jpg","kcal":216},{"id":391,"name":"다크 초콜릿 칩 머핀","description":"그랑크루 초콜릿을 함유한 더욱 진한 초콜릿의 풍미를 느낄 수 있는 머핀입니다.","price":2200,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/05/[9300000001555]_20180509163652737.jpg","kcal":510},{"id":392,"name":"상큼한 블루베리 머핀","description":"상큼한 블루베리로 만든 부드럽고 촉촉한 머핀입니다.","price":6300,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/05/[9300000001554]_20180509163415406.jpg","kcal":450},{"id":393,"name":"제주 감귤 머핀","description":"[제주지역 한정푸드] 한라봉 주스를 넣은 머핀에 초코칩을 넣어 달콤하면서도 상큼한 머핀입니다.","price":7800,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/05/[9300000001539]_20180528130703954.jpg","kcal":191},{"id":394,"name":"고소한 치즈 베이글","description":"양파 베이글 위에 고다 치즈, 파마산 치즈, 블렌디드 치즈를 얹은 베이글입니다.","price":9700,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2016/06/[9300000000130]_20160609141639682.jpg","kcal":343},{"id":395,"name":"블루베리 베이글","description":"블루베리의 상큼한 풍미가 매력적인 베이글로 크림치즈와 함께 더욱 맛있게 즐기실 수 있습니다.","price":7300,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2015/08/[5110001015]_20150805155117670.jpg","kcal":258},{"id":396,"name":"레이즌 스콘","description":"건포도가 듬뿍 들어가 달콤하고 고소한 풍미가 특징인 스콘입니다.","price":3000,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/12/[9300000002540]_20191220143617296.jpg","kcal":425},{"id":397,"name":"미니 클래식 스콘","description":"미니 사이즈의 담백한 스콘입니다.","price":9200,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/08/[5110001099]_20190826174234039.jpg","kcal":452},{"id":398,"name":"카카오 초콜릿 스콘","description":"진한 초콜릿 풍미를 느낄 수 있는 스콘입니다.","price":1500,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/05/[9300000001558]_20180509164154075.jpg","kcal":480},{"id":399,"name":"클래식 스콘","description":"프랑스산 고급 버터로 만든 담백한 스콘입니다. ","price":8200,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/05/[9300000001557]_20180510111353221.jpg","kcal":468},{"id":400,"name":"한라봉 스콘","description":"[제주지역 한정푸드] 버터로 만든 스콘에 한라봉 주스를 넣어 더 상큼한 스콘입니다.","price":8200,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/05/[9300000001540]_20180528131113756.jpg","kcal":266},{"id":401,"name":"DT_파마산 스틱","description":"고소한 파마산 치즈를 뿌린 스틱형 패스츄리 입니다.","price":2300,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/02/[9300000001852]_20190214151238821.jpg","kcal":240},{"id":402,"name":"거문 오름 크루아상","description":"[제주지역 한정푸드] 제주도의 현무암을 크루아상에 오름 모양을 아몬드 페이스트로 형상화하여만든 크루아상입니다.","price":5100,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/02/[9300000001361]_20180208145626492.jpg","kcal":391},{"id":403,"name":"딸기 앙모스","description":"고소한 슈트로이젤 크럼이 토핑된 완두, 통팥 앙금 빵에 달콤한 연유 버터 크림과 딸기 잼이 샌드된 매력적인 앙모스! 먹는 재미 뿐 아니라 보는 재미도 즐길 수 있습니다.","price":1900,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2020/02/[9300000002627]_20200219094113290.jpg","kcal":640},{"id":404,"name":"리프 파이","description":"나무잎을 닮은 64겹의 파이결이 만든 바삭 바삭한 파이","price":9500,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2017/05/[9300000000887]_20170510134043236.jpg","kcal":265},{"id":407,"name":"스모크드 소시지 브레드","description":"훈제된 도톰한 소시지와 머스타드 그릴드 어니언이 맛의 \r\n조화를 이룬 든든한 간식용 소시지 브레드입니다.","price":2100,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/10/[9300000002445]_20191021134554268.jpg","kcal":500},{"id":408,"name":"스윗 크루아상 러스크","description":"바삭하고 고소한 크루아상 러스크에 세 가지 초콜릿 디핑을 입혀 달콤함을 더하고 라즈베리 토핑을  흩뿌려 봄날의 피크닉에서 만날 수 있는 벚꽃을 떠올리게 하는 스낵형 브레드입니다.","price":7800,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2020/03/[9300000002685]_20200303143440232.jpg","kcal":267},{"id":409,"name":"우도 땅콩 데니쉬롤","description":"[제주지역 한정푸드] 우도 특산물인 고소한 우도 땅콩을 올리고 풍미가 좋은 프랑스 버터를 사용한 데니쉬롤입니다.","price":1500,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/02/[9300000001362]_20180208145434920.jpg","kcal":365},{"id":410,"name":"제주 주상절리 파이","description":"[제주지역 한정푸드] 제주의 주상절리 모양을 표현하여 겹겹이 쌓은 패스츄리를\r\n바삭하게 구운 후 초콜릿을 입혀 달콤하게 즐길 수 있는 제주 전용 파이입니다.","price":7300,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/11/[9300000002489]_20191106171030318.jpg","kcal":447},{"id":411,"name":"제주 한라봉 뺑오쇼콜라","description":"[제주지역 한정푸드] 초코스틱과 제주 특산물인 한라봉필이 함께 필링되어\r\n달콤하고 상큼한 맛을 동시에 느낄 수 있는 패스츄리 입니다.","price":9700,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/11/[9300000002488]_20191106172218622.jpg","kcal":322},{"id":412,"name":"초콜릿 롤링 크루아상","description":"초콜릿을 롤링하여 만든 데니쉬 위에 초콜릿 크림을 넣어 달콤한 맛이 느껴지는 색다른 매력의 크루아상입니다.","price":7700,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/08/[9300000001774]_20180829140341186.jpg","kcal":350},{"id":413,"name":"프렌치 크루아상","description":"밀기울과 프랑스산 AOP 버터를 반죽에 사용하여 고소한 풍미가 \r\n살아있는 프렌치 크루아상입니다.","price":1800,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/05/[9300000002135]_20190515174422340.jpg","kcal":270},{"id":414,"name":"하트 파이","description":"하트 모양의 바삭한 파이입니다. ","price":10000,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2015/07/[5110006070]_20150723085025288.jpg","kcal":455},{"id":415,"name":"서머 베리 요거트 케이크","description":"보랏빛 요거트 크림이 마치 파아란 바다를 연상시키는 여름 시즌 한정 케이크입니다.","price":3000,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2020/04/[9300000002709]_20200406204905234.jpg","kcal":665},{"id":416,"name":"초콜릿 카라멜팅 케이크","description":"달콤한 초콜릿 시트 사이에 초콜릿 컬이 들어간 연유 크림과 윗면의 카라멜이 자연스럽게 흘러내리는 듯한 부드러운 케이크입니다.","price":6100,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2020/05/[9300000002721]_20200508081947822.jpg","kcal":620},{"id":417,"name":"7 레이어 가나슈 케이크","description":"초콜릿, 가나슈, 모카로 만든 시트와 크림이 7개의 층을 이루어 모양부터 매력적인 케이크입니다.","price":3000,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2017/10/[9300000001179]_20171019152611027.jpg","kcal":625},{"id":418,"name":"DT밀당 케이크_레드 벨벳","description":"레드벨벳 크림치즈 케이크를 DT 매장 이용시 편리하게 즐기실 수 있도록 밀어먹는 케이스에 담았습니다.","price":6600,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/03/[9300000001392]_20180315164104017.jpg","kcal":224},{"id":419,"name":"DT밀당 케이크_촉촉 초코","description":"촉촉 초콜릿 생크림 케이크를 DT 매장 이용시 편리하게 즐기실 수 있도록 밀어먹는 케이스에 담았습니다.","price":6600,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/03/[9300000001393]_20180315164159937.jpg","kcal":129},{"id":420,"name":"레드벨벳 크림치즈 케이크","description":"레드벨벳 시트 사이에 크림치즈 무스를 샌드한 케이크입니다.","price":8400,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2015/10/[5110007192]_20151002104431160.jpg","kcal":466},{"id":421,"name":"마스카포네 티라미수 케이크","description":"고소한 마스카포네 치즈 크림에 촉촉한 커피 시트가 입안을 감싸는 기분 좋은 느낌의 떠먹는 티라미수입니다.","price":5600,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/12/[9300000001907]_20181224160412089.jpg","kcal":520},{"id":422,"name":"번트 치즈 케이크","description":"크림치즈가 듬뿍 들어간 케이크를 높은 온도로 짧은 시간 구워 낸 진한 맛의 치즈 케이크입니다.","price":7400,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2020/02/[9300000002534]_20200206132830404.jpg","kcal":825},{"id":423,"name":"부드러운 생크림 카스텔라","description":"부드러운 생크림이 듬뿍 들어있는 촉촉한 카스텔라입니다. ","price":5600,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2015/07/[5110007181]_20150723001851513.jpg","kcal":593},{"id":424,"name":"블루베리 쿠키 치즈 케이크","description":"고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크위에 달콤, 상큼한 블루베리가 올라간 진한 치즈 풍미의 케이크입니다.","price":3900,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/04/[9300000001376]_20180412095015947.jpg","kcal":984},{"id":425,"name":"슈 크림 초콜릿 쿠키 슈","description":"구운 아몬드 슬라이스와 초콜릿을 입힌 쿠키 슈 안에 부드러운 슈 크림이 듬뿍 들어있는 달콤한 디저트입니다.","price":4900,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2020/02/[9300000002429]_20200219093744888.jpg","kcal":550},{"id":426,"name":"슈크림 가득 바움쿠헨","description":"바닐라 빈이 들어간 부드러운 슈크림과 바움쿠헨이 조화로운 바닐라 풍미의 케이크입니다.\r\n","price":6600,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/11/[9300000002448]_20191112103406500.jpg","kcal":565},{"id":427,"name":"진한 녹차 생크림 케이크","description":"입 안 가득 풍부하고 진하게 퍼지는 녹차 맛이 특징인 케이크로 동물성 크림을\r\n더해 더욱 부드럽게 즐길 수 있습니다.","price":4200,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/07/[9300000001576]_20180720100423612.jpg","kcal":272},{"id":428,"name":"진한 얼 그레이 생크림 케이크","description":"직접 우려낸 얼 그레이를 부드러운 크림에 넣어 입 안 가득 퍼지는 얼 그레이의 진하고 풍부한 맛과 향이 특징인 케이크입니다.","price":6200,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/12/[9300000001908]_20181224160525094.jpg","kcal":660},{"id":429,"name":"진한 초콜릿 크레이프 케이크","description":"한 장 한 장 정성스럽게 구운 크레이프 사이에\r\n초코 크림과 진한 가나슈를 넣어 만든 케이크입니다.\r\n초코 크런치 볼 토핑으로 바삭한 식감을 더했습니다. ","price":9800,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/09/[9300000002293]_20190917153147994.jpg","kcal":385},{"id":430,"name":"초콜릿 페스티벌 케이크","description":"진한 풍미의 초콜릿 케이크 위에 달콤한 초콜릿을 얇게 썰어 올린 정통 초콜릿 케이크 입니다.","price":2900,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/10/[9300000001801]_20181022124646666.jpg","kcal":640},{"id":431,"name":"크레이프 치즈 케이크","description":"부드러운 카스텔라와 에멘탈 치즈, 크림치즈로 만든 케이크를 한 장 한 장\r\n얇게 구운 크레이프로 감싸 정성스럽게 만든 케이크입니다. ","price":6500,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[9300000002162]_20190617140000992.jpg","kcal":565},{"id":432,"name":"클라우드 초콜릿 케이크","description":"부드러운 초콜릿 시트에 크림치즈 무스를 올린 달콤한 초콜릿 케이크입니다.","price":5700,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/08/[9300000002175]_20190827154929632.jpg","kcal":770},{"id":433,"name":"클라우드 치즈 케이크","description":"사워크림의 상큼함과 진한 치즈의 맛을 동시에 맛볼 수 있는 케이크입니다. ","price":8600,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2016/05/[9300000000132]_20160511104357725.jpg","kcal":586},{"id":434,"name":"호두 당근 케이크","description":"고소한 호두와 당근이 조화로운 홈메이드 타입 케이크입니다. ","price":6900,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2015/08/[5110007147]_20150804230425962.jpg","kcal":942},{"id":435,"name":"화이트 돌체 케이크","description":"화이트 시트 사이에 화이트 가나슈와 생크림, 연유 크림, 마스카포네 크림 순으로 샌드한 부드러운 케이크입니다.","price":7300,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2020/02/[9300000002535]_20200206133010804.jpg","kcal":415},{"id":436,"name":"Thank you! 베리 케이크","description":"5월 감사의 달, 소중한 분께 특별한 감사의 마음을 땡큐! 베리 케이크로 표현 하세요. 카네이션을 들고 있는 베어리스타가 감사의 마음을 가득 담아 전달해 드립니다.","price":4400,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2020/04/[9300000002689]_20200423143627574.jpg","kcal":300},{"id":437,"name":"당근 현무암 케이크","description":"[제주지역 한정푸드]현무암을 연상케 하는 오징어 먹물 케이크 시트 사이에 새콤한 당근 크림치즈 무스를 샌드한 컵 케이크","price":10000,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2017/07/[9300000001055]_20170710124750942.jpg","kcal":304},{"id":438,"name":"몽한라 아일랜드","description":"[제주지역 한정푸드] 상큼한 한라봉 주스를 넣은 시트에 레몬과 크림치즈를 올린 컵 케이크입니다.","price":3400,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/05/[9300000001537]_20180528125759495.jpg","kcal":809},{"id":439,"name":"제주 리얼녹차 티라미수 아일랜드","description":"[제주지역 한정푸드] 제주녹차를 사용한 시트와 마스카포네 크림으로 진한 녹차의 풍미를 느낄 수 있는\r\n제주 전용 티라미수입니다.","price":2000,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/11/[9300000002491]_20191106171253990.jpg","kcal":421},{"id":440,"name":"티라미수 아일랜드","description":"[제주지역 한정푸드] 제주도의 섬 모양을 형상화하고 마스카포네를 넣어 더욱 부드러운 티라미수입니다. ","price":2100,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/02/[9300000001365]_20180208145758781.jpg","kcal":476},{"id":441,"name":"촉촉 초콜릿 생크림 케이크","description":"촉촉한 초콜릿 시트에 초콜릿 생크림을 층층이 샌드하여 부드럽고 달콤한 맛이 특징인 케이크입니다.","price":1500,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2016/02/[9300000000011]_20160212132908104.jpg","kcal":378},{"id":442,"name":"블루베리 쿠키 치즈 케이크","description":"달콤한 블루베리를 듬뿍 올린 진한 풍미의 쿠키 치즈 케이크입니다. \r\n(사이즈 18cm / 중량 1,250g)","price":5900,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/04/[9300000000913]_20180430162431754.jpg","kcal":385},{"id":443,"name":"세븐 레이어 가나슈 케이크","description":"초콜릿, 가나슈, 모카로 만든 시트와 크림으로 만든 7개의 층이 특징이며, 가나슈로 감싸 진한 풍미의 초콜릿 케이크입니다.\r\n(지름 12cm / 중량 510g)","price":9200,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/04/[9300000002065]_20190412135121406.jpg","kcal":425},{"id":444,"name":"청담스타 얼 그레이 밀크 케이크","description":"꿀이 함유된 얼 그레이 시트 사이에 부드러운 얼 그레이 생크림을 샌드한 청담스타 1,000호점, 청담스타 대표 케이크입니다.\r\n(사이즈 15cm / 중량 520g)","price":3500,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2018/04/[9300000001521]_20180419160443788.jpg","kcal":310},{"id":445,"name":"청담스타 오 허니 케이크","description":"흑설탕 시트 사이에 꿀과 요거트 크림을 샌드한 청담스타 대표 케이크를\r\n이제 특별한 날 홀케이크로 만나보실 수 있습니다. (사이즈 15cm / 중량 550g)","price":6300,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2017/04/[9300000000882]_20170425213905124.jpg","kcal":348},{"id":446,"name":"크레이프 에멘탈 치즈 케이크","description":"부드러운 카스텔라와 에멘탈 치즈, 크림치즈로 만든 케이크를 한 장 한 장 얇게 구운 크레이프로 감싸 정성스럽게 만든 케이크입니다.\r\n(지름 12cm / 중량 400g)","price":2900,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/04/[9300000002064]_20190412135005999.jpg","kcal":330},{"id":447,"name":"피칸 브라우니","description":"초콜릿 청크를 넣고 고소한 피칸을 듬뿍 올린 진한 브라우니로 품격 있는 선물을 준비하세요.\r\n(가로*세로 16cm*16cm / 중량 500g)","price":4700,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/06/[9300000002173]_20190612150600937.jpg","kcal":465},{"id":448,"name":"헤븐리 티라미수","description":"촉촉한 커피 시럽의 레이디핑거 쿠키와 100% 마스카포네 크림치즈로 만든 떠 먹는 타입의 티라미수입니다. (사이즈 18cm / 중량 850g)","price":7700,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2017/04/[9300000000878]_20170425213107826.jpg","kcal":236},{"id":449,"name":"쉬림프 \u0026 아보카도 샌드위치","description":"아보카도와 브로콜리 샐러드, 로메인의 그린 앙상블에 탱글탱글한 쉬림프 식감이 봄의 상큼함을 깨우는 콜드 샌드위치입니다","price":4100,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2020/03/[9300000002687]_20200303143546000.jpg","kcal":385},{"id":450,"name":"부드러운 크림치즈 샌드위치","description":"검은 깨가 콕콕 들어있는 건강한 식빵 안에 토마토와 햄, 그리고 부드럽고 산뜻한 크림치즈가 들어있는 샌드위치입니다.","price":2300,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2020/02/[9300000002625]_20200219093852640.jpg","kcal":470},{"id":451,"name":"햄 치즈 먹물 샌드위치","description":"아메리칸 스위스 치즈, 본레스 햄, 루꼴라가 들어간 먹물 식빵 샌드위치 위에 파마산 치즈, 체더 치즈를 토핑하여 바삭한 식감을 더한 샌드위치입니다.","price":7600,"image":"https://www.istarbucks.co.kr/upload/store/skuimg/2019/12/[9300000002536]_20191220143852765.jpg","kcal":365}]
  return (
    <Wrapper>
      <LogoHeader/>
      <MenuWrapper >
        <DessertBar/>
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

export default BreadPresenter;

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