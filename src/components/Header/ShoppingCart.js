import PropTypes from "prop-types";
import styled from "styled-components";

const Img = styled.img`
  cursor: pointer;
  padding-top: 20px;
`;

ShoppingCart.propTypes = {
  logo: PropTypes.string.isRequired,
  width: PropTypes.number,
  className: PropTypes.string,
  alt: PropTypes.string,
};

ShoppingCart.defaultProps = {
  width: 50,
  className: "shopping-cart-icon",
  alt: "Shopping Cart",
};

function ShoppingCart(props) {
  const { logo, width, className, alt } = props;
  return (
    <Img className={className} src={logo} alt={alt} style={{ width: width }} />
  );
}

export default ShoppingCart;
