import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledRemove } from "./styled";
import { StyledLink, Flex, CenterCell } from "../../styled";
import { formatter } from "../../utils";
import Quantity from "../Quantity";
import { useCart } from "../../hooks";

function ProductRow(props) {
  const { product } = props;
  var { stock, mainimage, name, price } = product.data || {};
  const [quantity, setQuantity] = useState(product.quantity);
  const { format } = formatter;
  const { dispatch, increment, decrement, remove } = useCart();

  const isDownDisabled = quantity === 1;
  const isUpDisabled = quantity === stock;

  const handleIncrement = () => {
    setQuantity((prevQty) => prevQty + 1);
    dispatch(increment({ id: product.id }));
  };

  const handleDecrement = () => {
    setQuantity((prevQty) => prevQty - 1);
    dispatch(decrement({ id: product.id }));
  };

  const handleRemove = () => {
    dispatch(remove({ id: product.id }));
  };

  return (
    <tr>
      <td>
        <Flex
          container
          alignItems="center"
          gap="30px"
          mobileFlexDirection="row"
        >
          <img src={mainimage.url} alt="" width="100px" />
          <StyledLink
            to={`${props.path}/${product.id}`}
            textDecoration="underline"
          >
            <span>{name}</span>
          </StyledLink>
        </Flex>
      </td>
      <CenterCell>{format(price)}</CenterCell>
      <CenterCell>
        <Flex container justifyContent="center">
          <Quantity
            quantity={quantity}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            isDownDisabled={isDownDisabled}
            isUpDisabled={isUpDisabled}
          />
        </Flex>
      </CenterCell>
      <CenterCell>{format(price * product.quantity)}</CenterCell>
      <CenterCell>
        <Flex container justifyContent="center" mobileFlexDirection="row">
          <StyledRemove onClick={handleRemove} icon-role="remove" />
        </Flex>
      </CenterCell>
    </tr>
  );
}

ProductRow.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }),
      mainimage: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }),
    }),
  }),
  path: PropTypes.string,
};

ProductRow.defaultProps = {
  path: "/product",
};

export default React.memo(ProductRow);
