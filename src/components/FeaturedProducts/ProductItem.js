import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  margin: auto;
  text-align: center;
  font-family: arial;
  height: 100%;
`;

const Price = styled.div`
  color: grey;
  font-size: 16px;
`;

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

function ProductItem({ product }) {
  const {
    data: {
      name,
      price,
      category: { slug },
      mainimage: { url, alt },
    },
  } = product;
  return (
    <Card>
      <img src={url} alt={alt} style={{ width: "100%" }} />
      <h4>{name}</h4>
      <Price>${price}</Price>
      <p className="category">{slug}</p>
    </Card>
  );
}

export default ProductItem;
