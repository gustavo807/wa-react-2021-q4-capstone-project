import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "shoppingCart",
  initialState: {
    products: [],
  },
  reducers: {
    add: (state, action) => {},
    remove: (state, action) => {},
    reset: (state, action) => {
      state.products = [];
    },
  },
});

export const { add, remove, reset } = slice.actions;

export const selectProducts = (state) => state.products;

export default slice.reducer;
