import React from "react";
import {
  FeaturedBanners,
  ProductCategories,
  FeaturedProducts,
} from "../components";

function HomePage() {
  return (
    <div className="container">
      <FeaturedBanners />
      <ProductCategories />
      <FeaturedProducts />
    </div>
  );
}

export default HomePage;
