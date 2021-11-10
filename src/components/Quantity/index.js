import PropTypes from "prop-types";
import { Button, Flex, Input } from "../../styled";

function Quantity(props) {
  const {
    quantity,
    handleIncrement,
    handleDecrement,
    isUpDisabled,
    isDownDisabled,
  } = props;

  return (
    <Flex container>
      <Button disabled={isDownDisabled} onClick={handleDecrement}>
        -
      </Button>
      <Input type="number" value={quantity} disabled />
      <Button disabled={isUpDisabled} onClick={handleIncrement}>
        +
      </Button>
    </Flex>
  );
}

Quantity.propTypes = {
  quantity: PropTypes.number.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  isUpDisabled: PropTypes.bool.isRequired,
  isDownDisabled: PropTypes.bool.isRequired,
};

export default Quantity;
