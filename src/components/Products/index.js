import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Cards } from "./styled";
import { Container, Button, Flex } from "../../styled";
import ProductItem from "../ProductItem";

function Products({ title, products, showAllProductsButton }) {
  return (
    <Container>
      {title && <h1>{title}</h1>}
      <Cards>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Cards>
      {showAllProductsButton && (
        <Flex container justifyContent="center" margin="30px">
          <Link to="/products">
            <Button className="lg" data-testid="view-all-products">
              View all products
            </Button>
          </Link>
        </Flex>
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
