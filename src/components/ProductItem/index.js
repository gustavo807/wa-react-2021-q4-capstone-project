import PropTypes from "prop-types";
import { useCart } from "../../hooks";
import { Card, Img, Price } from "./styled";
import { StyledLink } from "../../styled";
import { formatter, productQty } from "../../utils";
import AddToCart from "../AddToCart";

function ProductItem(props) {
  const { id, data } = props.product;
  const { format } = formatter;
  const { dispatch, add, products } = useCart();

  const { isDisabled } = productQty(products, props.product);

  const handleClick = () => {
    if (!isDisabled) {
      dispatch(add({ product: props.product, quantity: 1 }));
    }
  };

  return (
    <Card>
      <StyledLink to={`${props.path}/${id}`}>
        <Img src={data.mainimage.url} alt={data.mainimage.alt} />
        <h4>{data.name}</h4>
        <Price>{format(data.price)}</Price>
        <p>{data.category.slug}</p>
      </StyledLink>

      <AddToCart isDisabled={isDisabled} handleAddToCart={handleClick} />
    </Card>
  );
}

ProductItem.propTypes = {
  path: PropTypes.string,
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
        alt: PropTypes.string,
      }),
    }),
  }),
};

ProductItem.defaultProps = {
  path: "/product",
};

export default ProductItem;
