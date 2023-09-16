import imageFunctionality from "./reducer";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit"; // Assuming you're using Redux Toolkit

const allReducers = combineReducers({
  image: imageFunctionality, // Use 'image' instead of 'imgeAddition'
});

const store = configureStore({
  reducer: allReducers, // Use 'allReducers' instead of 'imageFunctionality'
});

export default store;
