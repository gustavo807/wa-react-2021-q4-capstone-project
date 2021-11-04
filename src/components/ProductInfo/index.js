import PropTypes from "prop-types";
import { Search, Submit } from "../../styled";
import {
  Container,
  Title,
  Price,
  Sku,
  Category,
  Tags,
  Form,
  Description,
} from "./styled";

function ProductInfo({ name, price, sku, category, description, specs, tags }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Title>{name}</Title>
      <Price>Price: ${price}</Price>
      <Sku>SKU: {sku}</Sku>
      <Category>Category: {category.slug}</Category>
      <Tags>
        <span>Tags:</span>
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </Tags>

      <Description>
        {description.length > 0 ? description[0].text : ""}
      </Description>

      <Form onSubmit={handleSubmit}>
        <Search
          type="number"
          placeholder="Enter quantity"
          aria-label="Product Quantity"
        />
        <Submit type="submit" value="Add to Cart" />
      </Form>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Specs</th>
          </tr>
        </thead>
        <tbody>
          {specs.map((spec) => (
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
};

export default ProductInfo;
