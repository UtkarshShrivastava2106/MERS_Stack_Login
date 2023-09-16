import { ADD_IMAGE } from "../constants";

export const addImage = (image) => {
  return {
    type: ADD_IMAGE,
    payload: image,
  };
};

// export const removeImage = () => {
//   return {
//     type: REMOVE_IMAGE,
//   };
// };
