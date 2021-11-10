import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  count: 0,
  total: 0,
};

export const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const quantity = Number(action.payload.quantity) || 0;
      if (quantity < 1) throw new Error("Invalid Quantity.");

      const { product } = action.payload;
      const index = state.products.findIndex((p) => p.id === product.id);

      const errorQuantity = () => {
        throw new Error("The requested quantity is not available.");
      };

      if (index !== -1) {
        let newQty = state.products[index].quantity + quantity;

        if (newQty > product.data?.stock) {
          errorQuantity();
        }

        state.products[index].quantity = newQty;
      } else {
        if (quantity > product.data?.stock) {
          errorQuantity();
        }

        state.products.push({
          ...product,
          quantity: quantity,
        });
      }

      let { count, total } = sumProducts(state.products);
      state.count = count;
      state.total = total;
    },
    update: (state, action) => {
      const { id, type } = action.payload;
      const quantity = type === "increment" ? +1 : -1;

      const index = state.products.findIndex((p) => p.id === id);

      if (index !== -1) {
        var newQuantity = state.products[index].quantity + quantity;

        if (newQuantity > state.products[index].data?.stock) {
          throw new Error("The requested quantity is not available.");
        }

        state.products[index].quantity = newQuantity;

        let { count, total } = sumProducts(state.products);
        state.count = count;
        state.total = total;
      } else {
        throw new Error("Product not found.");
      }
    },
    remove: (state, action) => {
      const { id } = action.payload;
      const index = state.products.findIndex((p) => p.id === id);

      if (index !== -1) {
        state.products.splice(index, 1);

        let { count, total } = sumProducts(state.products);
        state.count = count;
        state.total = total;
      } else {
        throw new Error("Product not found.");
      }
    },
    clear: (state) => {
      state.products = [];
      state.count = 0;
      state.total = 0;
    },
  },
});

export const sumProducts = (products) => {
  const sumReducer = (total, product) => {
    return total + product.quantity;
  };
  const totalReducer = (total, product) => {
    return total + product.data?.price * product.quantity;
  };

  let count = products.reduce(sumReducer, 0);
  let total = products.reduce(totalReducer, 0).toFixed(2);

  return { count, total };
};

export const increment =
  ({ id }) =>
  (dispatch) => {
    dispatch(update({ id, type: "increment" }));
  };

export const decrement =
  ({ id }) =>
  (dispatch) => {
    dispatch(update({ id, type: "decrement" }));
  };

export const { add, update, remove, clear } = slice.actions;

export const selectProducts = (state) => state.cart.products;
export const selectCount = (state) => state.cart.count;
export const selectTotal = (state) => state.cart.total;

export default slice.reducer;
