// import { ADD_IMAGE } from "../constants";

// const initialState = {
//   imageArr: [],
//   image: {},
// };
// export default function imageFunctionality(state = initialState, action) {
//   switch (action.type) {
//     case ADD_IMAGE:
//       return {
//         image: action.payload,
//         ...state,
//       };

//     default:
//       break;
//   }
// }

import { ADD_IMAGE } from "../constants";

const initialState = {
  imageArr: [],
  image: {},
};

export default function imageFunctionality(state = initialState, action) {
  switch (action.type) {
    case ADD_IMAGE:
      return {
        ...state,
        image: action.payload, // Append to imageArr
      };

    default:
      return state;
  }
}
