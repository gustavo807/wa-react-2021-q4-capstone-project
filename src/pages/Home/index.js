import React from "react";
import { Banner, Products } from "../../components";

import featuredBanners from "../../mocks/en-us/featured-banners.json";
import productCategories from "../../mocks/en-us/product-categories.json";
import featuredProducts from "../../mocks/en-us/featured-products.json";

function Home({ changeView }) {
  return (
    <div className="container">
      <Banner mainTitle="Featured Banners" items={featuredBanners.results} />
      <Banner mainTitle="Categories" items={productCategories.results} />
      <Products
        title="Feature Products"
        products={featuredProducts.results}
        changeView={changeView}
      />
    </div>
  );
}

export default Home;
