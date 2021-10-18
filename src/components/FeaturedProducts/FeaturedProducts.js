import React from "react";
import ProductCard from "./ProductCard";
import products from "../../mocks/en-us/featured-products.json";
import "./FeaturedProducts.scss";

function FeaturedProducts() {
  return (
    <div className="featured-products">
      <h1 style={{ textAlign: "center" }}>Feature Products</h1>
      <div className="featured-products-cards">
        {products &&
          products.results.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
