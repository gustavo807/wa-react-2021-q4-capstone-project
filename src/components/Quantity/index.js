import PropTypes from "prop-types";
import { Button, Flex, Input } from "../../styled";

function Quantity(props) {
  const {
    quantity,
    handleIncrement,
    handleDecrement,
    isUpDisabled,
    isDownDisabled,
    id,
  } = props;

  return (
    <Flex container>
      <Button
        disabled={isDownDisabled}
        onClick={handleDecrement}
        data-testid={`decrement-${id}`}
      >
        -
      </Button>
      <Input type="number" value={quantity} disabled />
      <Button
        disabled={isUpDisabled}
        onClick={handleIncrement}
        data-testid={`increment-${id}`}
      >
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
  id: PropTypes.string,
};

Quantity.defaultProps = {
  id: "0",
};

export default Quantity;
