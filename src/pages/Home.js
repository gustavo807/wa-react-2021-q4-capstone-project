import React from "react";
import {
  FeaturedBanners,
  ProductCategories,
  FeaturedProducts,
} from "../components";

import featuredBanners from "../mocks/en-us/featured-banners.json";
import productCategories from "../mocks/en-us/product-categories.json";
import featuredProducts from "../mocks/en-us/featured-products.json";

function Home() {
  return (
    <div className="container">
      <FeaturedBanners banners={featuredBanners.results} />
      <ProductCategories categories={productCategories.results} />
      <FeaturedProducts products={featuredProducts.results} />
    </div>
  );
}

export default Home;
