// productsData.js
//정육 49 73
//반찬 60 73
//커피/차 58 21
//친환경 39 24
//유제품 74 21
//
//양념,오일 74 52
//쌀, 잡곡 25,22
//해산물 36 73
//베이커리 74 5
//통조림 58 32
//면류 47.5 20
//건강식품 25 52
//과자 47.5 31
//간편식 41.2 50

import fruit_img1 from "../img/fruit_img1.png";
import fruit_img2 from "../img/fruit_img2.png";
import fruit_img3 from "../img/fruit_img3.png";

import health_img1 from '../img/health_img1.png';
import health_img2 from '../img/health_img2.png';

import bakery_img1 from '../img/bakery_img1.png';
import bakery_img2 from '../img/bakery_img2.png';

import beverage_img1 from '../img/beverage_img1.png';
import beverage_img2 from '../img/beverage_img2.png';

import cafe_img1 from '../img/cafe_img1.png';
import cafe_img2 from '../img/cafe_img2.png';

import echo_img1 from '../img/echo_img1.png';
import echo_img2 from '../img/echo_img2.png';

import mealkit_img1 from '../img/mealkit_img1.png';
import mealkit_img2 from '../img/mealkit_img2.png';

import meat_img1 from '../img/meat_img1.png';
import meat_img2 from '../img/meat_img2.png';

import milk_img1 from '../img/milk_img1.png';
import milk_img2 from '../img/milk_img2.png';

import noodlecan_img1 from '../img/noodlecan_img1.png';
import noodlecan_img2 from '../img/noodlecan_img2.png';

import rice_img1 from '../img/rice_img1.png';
import rice_img2 from '../img/rice_img2.png';

import sauceoil_img1 from '../img/sauceoil_img1.png';
import sauceoil_img2 from '../img/sauceoil_img2.png';

import seafood_img1 from '../img/seafood_img1.png';
import seafood_img2 from '../img/seafood_img2.png';

import sidedish_img1 from '../img/sidedish_1.png';
import sidedish_img2 from '../img/sidedish_2.png';

import snack_img1 from '../img/snack_img1.png';
import snack_img2 from '../img/snack_img2.png';

import vege_img1 from '../img/vege_img1.png';
import vege_img2 from '../img/vege_img2.png';


const allProducts = [
  { 
    id: 1,
    name: "[엔비사과 4~6입/봉 (1.3kg내외)] 엔비사과 4~6입/봉 (1.3kg내외)",
    price: "16,900", 
    imageURL: fruit_img1, 
    coordinates: { x: 25, y: 35 } },
  { id: 2, 
    name: "[당도선별] 유명산지 청송사과 1.5kg (봉)", 
    price: "16,900", 
    imageURL: fruit_img3, 
    coordinates: { x: 25, y: 35 } },
  {
    id: 3,
    name: "[고려은단] 비타민C1000 이지+비타민D 120정",
    price: "13,800",
    imageURL: health_img1,
    coordinates : {x: 25,y:52}
    },
    {
    id: 4,
    name: "[고려은단] 알티지 오메가3",
    price: "14,900",
    imageURL: health_img2,
    coordinates : {x: 25,y:52}
    },
    {
    id: 6,
    name: "[자연주의] 저탄소인증 하우스 감귤 1kg/팩",
    price: "9,480",
    imageURL: fruit_img2,
    coordinates : {x: 25,y:35}
    },
    {
    id: 7,
    name: "[롯데웰푸드] 롯데 아몬드빼빼로132G",
    price: "4,380",
    imageURL: snack_img1,
    coordinates : {x: 47.5,y:31}
    },
    {
    id: 8,
    name: "[농심] 자갈치90g",
    price: "1,360",
    imageURL: snack_img2,
    coordinates : {x: 47.5,y:31}
    },
    {
    id: 9,
    name: "[비비고] CJ 비비고 썰은 배추김치 500G",
    price: "9,980",
    imageURL: sidedish_img1,
    coordinates : {x: 60,y:73}
    },
    {
    id: 10,
    name: "[비비고] CJ 비비고 소고기 장조림 125g",
    price: "3,680",
    imageURL: sidedish_img2,
    coordinates : {x: 60,y:73}
    },
    {
    id: 11,
    name: "[농심] 올리브 짜파게티 (140gx5입)",
    price: "4,880",
    imageURL: noodlecan_img1,
    coordinates : {x: 47.5,y:20}
    },
    {
    id: 12,
    name: "[동원] 참치살코기 135g*8",
    price: "18,480",
    imageURL: noodlecan_img2,
    coordinates : {x: 58,y:32}
    },
    {
    id: 13,
    name: "[CJ제일제당] CJ 미정당국물떡볶이401.2g",
    price: "2,980",
    imageURL: mealkit_img1,
    coordinates : {x: 41.2,y:50}
    },
    {
    id: 14,
    name: "[오뚜기] 수원식 우거지갈비탕500G",
    price: "7,480",
    imageURL: mealkit_img2,
    coordinates : {x: 41.2,y:50}
    },
    {
    id: 15,
    name: "[피코크] 호떡 480g",
    price: "4,186",
    imageURL: bakery_img1,
    coordinates : {x: 74,y:5}
    },
    {
    id: 16,
    name: "[복음자리] 딸기쨈640g",
    price: "9,580",
    imageURL: bakery_img2,
    coordinates : {x: 74,y:5}
    },
    {
    id: 17,
    name: "[삼다수] 제주삼다수 그린 2L 6병",
    price: "6,480",
    imageURL: beverage_img1,
    coordinates : {x: 77,y:35}
    },
    {
    id: 18,
    name: "[노브랜드] Fresh제주감귤음료1.5L",
    price: "1,880",
    imageURL: beverage_img2,
    coordinates : {x: 77,y:35}
    },
    {
    id: 19,
    name: "[인도] 점보 칵테일 새우살 (21-25) (450g)",
    price: "16,980",
    imageURL: seafood_img1,
    coordinates : {x: 36,y:73}
    },
    {
    id: 20,
    name: "[아르헨티나] 손질 오징어 (대, 마리)",
    price: "3,980",
    imageURL: seafood_img2,
    coordinates : {x: 36,y:73}
    },
    {
    id: 21,
    name: "[2023년산]이맛쌀 20kg",
    price: "59,880",
    imageURL: rice_img1,
    coordinates : {x: 25,y:22}
    },
    {
    id: 22,
    name: "[미동농산] 해바라기씨 500g",
    price: "4,000",
    imageURL: rice_img2,
    coordinates : {x: 25,y:22}
    },
    {
    id: 23,
    name: "[오뚜기] 토마토케찹 300g",
    price: "1,980",
    imageURL: sauceoil_img1,
    coordinates : {x: 74,y:52}
    },
    {
    id: 24,
    name: "[해표] 식용유1.8L}, [해표] 식용유1.8L",
    price: "7,500",
    imageURL: sauceoil_img2,
    coordinates : {x: 74,y:52}
    },
    {
    id: 25,
    name: "[피코크] 에이 클래스 우유 900ml (1A등급)(매일유업)",
    price: "2,432",
    imageURL: milk_img1,
    coordinates : {x: 74,y:21}
    },
    {
    id: 26,
    name: "[피코크] 에이클래스 시그니처 그릭요거트 450g",
    price: "4,340",
    imageURL: milk_img2,
    coordinates : {x: 74,y:21}
    },
    {
    id: 27,
    name: "[노브랜드] [냉동] 삼겹살 바로구이 (1,000g)",
    price: "12,980",
    imageURL: meat_img1,
    coordinates : {x: 49,y:73}
    },
    {
    id: 28,
    name: "[풀무원] 신선가득 계란 15개입 (대란, 780g)",
    price: "7,980",
    imageURL: meat_img2,
    coordinates : {x: 74,y:21}
    },
    {
    id: 29,
    name: "[흙당근(1kg/봉)] 흙당근(1kg/봉)",
    price: "6,480",
    imageURL: vege_img1,
    coordinates : {x: 25,y:35}
    },
    {
    id: 30,
    name: "[파머스픽] 청경채 300g",
    price: "2,180",
    imageURL: vege_img2,
    coordinates : {x: 25,y:35}
    },
    {
    id: 31,
    name: "[피코크] 유기농 국내산 보리차 20T",
    price: "5,480",
    imageURL: echo_img1,
    coordinates : {x: 39,y:24}
    },
    {
    id: 32,
    name: "[자연주의] 유기농 푸룬주스 946ml",
    price: "9,980",
    imageURL: echo_img2,
    coordinates : {x: 39,y:24}
    },
    {
    id: 33,
    name: "[맥심] 모카골드 마일드 커피믹스 250입(쓱배송)",
    price: "32,780",
    imageURL: cafe_img1,
    coordinates : {x: 58,y:21}
    },
    {
    id: 34,
    name: "[피코크] 갈아만든 유자차 420g",
    price: "5,380",
    imageURL: cafe_img2,
    coordinates : {x: 58,y:21}
    }
];

export default allProducts;
