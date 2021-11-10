import { useSelector, useDispatch } from "react-redux";
import {
  add,
  increment,
  decrement,
  remove,
  clear,
} from "../../redux/slices/cartSlice";
import {
  selectProducts,
  selectCount,
  selectTotal,
} from "../../redux/slices/cartSlice";

function useCart() {
  const products = useSelector(selectProducts);
  const count = useSelector(selectCount);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();

  return {
    products,
    count,
    total,
    dispatch,
    add,
    increment,
    decrement,
    remove,
    clear,
  };
}

export default useCart;
