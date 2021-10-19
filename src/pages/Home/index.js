import React from "react";
import { Banner, Products } from "../../components";

import featuredBanners from "../../mocks/en-us/featured-banners.json";
import productCategories from "../../mocks/en-us/product-categories.json";
import featuredProducts from "../../mocks/en-us/featured-products.json";

function Home() {
  return (
    <div className="container">
      <Banner mainTitle="Featured Banners" items={featuredBanners.results} />
      <Banner mainTitle="Categories" items={productCategories.results} />
      <Products title="Feature Products" products={featuredProducts.results} />
    </div>
  );
}

export default Home;
