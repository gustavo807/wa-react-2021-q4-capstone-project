import PropTypes from "prop-types";
import { Button } from "../../styled";
import { StockMessage } from "./styled";

function AddToCart(props) {
  const { isDisabled, handleAddToCart } = props;

  return isDisabled ? (
    <StockMessage>Out of stock</StockMessage>
  ) : (
    <Button onClick={handleAddToCart}>Add To Cart</Button>
  );
}

AddToCart.propTypes = {
  isDisabled: PropTypes.bool,
  handleAddToCart: PropTypes.func,
};

AddToCart.defaultProps = {
  isDisabled: false,
  handleAddToCart: () => {},
};

export default AddToCart;
