import PropTypes from "prop-types";
import { Cards, Card, Price } from "./styled";
import { Container } from "../../styled";

function Products({ title, products }) {
  return (
    <Container>
      <h1>{title}</h1>
      <Cards>
        {products.map(
          ({
            id,
            data: {
              name,
              price,
              category: { slug },
              mainimage: { url, alt },
            },
          }) => (
            <Card key={id}>
              <img src={url} alt={alt} />
              <h4>{name}</h4>
              <Price>${price}</Price>
              <p>{slug}</p>
            </Card>
          )
        )}
      </Cards>
    </Container>
  );
}

Products.propTypes = {
  products: PropTypes.array,
  title: PropTypes.string,
};

Products.defaultProps = {
  products: [],
  title: "Products",
};

export default Products;
