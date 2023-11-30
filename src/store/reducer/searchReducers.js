// //searchReducer.js
// import * as actionTypes from '../actionTypes'; // 수정: 상위 폴더로 이동

// const initialState = {
//   searchQuery: '',
//   allProducts: [
//     { id: 1, name: "[엔비사과 4~6입/봉 (1.3kg내외)] 엔비사과 4~6입/봉 (1.3kg내외)", price: "16,900", coordinates: { x: 0, y: 0 } },
//     { id: 2, name: "[당도선별] 유명산지 청송사과 1.5kg (봉)", price: "16,900", coordinates: { x: 100, y: 100 } },
//   ],
//   searchResults: [],
//   showResults: false,
//   selectedProduct: null,
//   isMarkerVisible: false,
//   showVirtualKeyboard: false,
// };

// const searchReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.SET_SEARCH_QUERY:
//       return { ...state, searchQuery: action.payload };
//     default:
//       return state;
//   }
// };

// export default searchReducer