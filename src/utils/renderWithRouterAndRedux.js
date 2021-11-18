import { render } from "@testing-library/react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import cartReducer from "../redux/slices/cartSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
});

function renderWithRouterAndRedux(
  ui,
  {
    route = "/",
    initialState = {},
    store = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
    }),
    ...renderOptions
  } = {}
) {
  window.history.pushState({}, "Test page", route);
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

export default renderWithRouterAndRedux;
