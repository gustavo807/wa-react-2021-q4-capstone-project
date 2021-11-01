import { configureStore, combineReducers } from "@reduxjs/toolkit";
import shoppingCartReducer from "./slices/shoppingCartSlice";

const rootReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
