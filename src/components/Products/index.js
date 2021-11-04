import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Cards, Card, Price, Img, AddToCart } from "./styled";
import { Button } from "../../styled";
import { Container, StyledLink } from "../../styled";

function Products({ title, products, showAllProductsButton }) {
  return (
    <Container>
      {title && <h1>{title}</h1>}
      <Cards>
        {products.map(({ id, data: { name, price, category, mainimage } }) => (
          <Card key={id}>
            <StyledLink to={`/product/${id}`}>
              <Img src={mainimage.url} alt={mainimage.alt} />
              <h4>{name}</h4>
              <Price>${price}</Price>
              <p>{category.slug}</p>
            </StyledLink>

            <AddToCart>Add to cart</AddToCart>
          </Card>
        ))}
      </Cards>
      {showAllProductsButton && (
        <Link to="/products">
          <Button data-testid="view-all-products">View all products</Button>
        </Link>
      )}
    </Container>
  );
}

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
};

Products.defaultProps = {
  showAllProductsButton: false,
  title: "",
};

export default Products;
