import PropTypes from "prop-types";
import { useCart } from "../../hooks";
import { Card, Img, Price } from "./styled";
import { Button, StyledLink } from "../../styled";
import { formatter } from "../../utils";

function ProductItem(props) {
  const { id, data } = props.product;
  const { format } = formatter;
  const { dispatch, add, products } = useCart();

  const currQty = products.find((p) => p.id === id)?.quantity || 0;
  const isDisabled = currQty === data.stock;

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

      <Button onClick={handleClick} disabled={isDisabled}>
        {isDisabled ? "Out of stock" : "Add to cart"}
      </Button>
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
        alt: PropTypes.string.isRequired,
      }),
    }),
  }),
};

ProductItem.defaultProps = {
  path: "/product",
};

export default ProductItem;
