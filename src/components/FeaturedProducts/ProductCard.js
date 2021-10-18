import PropTypes from "prop-types";
import "./ProductCard.scss";

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

function ProductCard({ product }) {
  return (
    <div className="card">
      <img
        src={product.data.mainimage.url}
        alt={product.data.mainimage.alt}
        style={{ width: "100%" }}
      />
      <h4>{product.data.name}</h4>
      <p className="price">${product.data.price}</p>
      <p className="category">{product.data.category.slug}</p>
    </div>
  );
}

export default ProductCard;
