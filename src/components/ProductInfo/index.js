import { useState } from "react";
import PropTypes from "prop-types";
import { useCart } from "../../hooks";
import { formatter } from "../../utils";
import { Flex, Button } from "../../styled";
import {
  Container,
  Title,
  Price,
  Sku,
  Category,
  Tags,
  Description,
  Stock,
} from "./styled";
import Quantity from "../Quantity";

function ProductInfo(props) {
  const [quantity, setQuantity] = useState(1);
  const { dispatch, add, products } = useCart();
  const { format } = formatter;
  const { product = {} } = props;

  const currQty = products.find((p) => p.id === product.id)?.quantity || 0;
  const isDisabled = currQty === product.data.stock;

  const isDownDisabled = quantity === 1;
  const isUpDisabled = quantity + currQty > props.stock - 1;

  const handleAddToCart = () => {
    dispatch(add({ product: product, quantity: quantity }));
    setQuantity(1);
  };

  const handleIncrement = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQty) => prevQty - 1);
  };

  return (
    <Container>
      <Title>{props.name}</Title>
      <Price>Price: {format(props.price)}</Price>
      <Sku>SKU: {props.sku}</Sku>
      <Stock>Stock: {props.stock}</Stock>
      <Category>Category: {props.category.slug}</Category>
      <Tags>
        <span>Tags:</span>
        <ul>
          {props.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </Tags>

      <Description>
        {props.description.length > 0 ? props.description[0].text : ""}
      </Description>

      {props.stock === 0 ? (
        <h2>Product out of stock</h2>
      ) : (
        <Flex
          container
          flexDirection="column"
          alignItems="center"
          margin="15px 0"
          gap="10px"
        >
          <Quantity
            quantity={isDisabled ? 0 : quantity}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            isDownDisabled={isDownDisabled}
            isUpDisabled={isUpDisabled}
          />
          <Button onClick={handleAddToCart} disabled={isDisabled}>
            {isDisabled ? "Out of stock" : "Add to Cart"}
          </Button>
        </Flex>
      )}

      <table>
        <thead>
          <tr>
            <th colSpan={2}>Specs</th>
          </tr>
        </thead>
        <tbody>
          {props.specs.map((spec) => (
            <tr key={spec.spec_name}>
              <th>{spec.spec_name}</th>
              <td>{spec.spec_value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

ProductInfo.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sku: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  category: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }),
  description: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
  specs: PropTypes.arrayOf(
    PropTypes.shape({
      spec_name: PropTypes.string.isRequired,
      spec_value: PropTypes.string.isRequired,
    })
  ),
  stock: PropTypes.number.isRequired,
};

export default ProductInfo;
