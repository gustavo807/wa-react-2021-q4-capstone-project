import React, { useMemo } from "react";
import { Banner, Products, Loader } from "../../components";
import { useRequests, usePrismic } from "../../hooks";

function Home() {
  const { at, createRequest } = usePrismic();

  const requests = useMemo(
    () => [
      createRequest("featuredBanners", [at("document.type", "banner")], 5),
      createRequest("productCategories", [at("document.type", "category")], 30),
      createRequest(
        "featuredProducts",
        [at("document.type", "product"), at("document.tags", ["Featured"])],
        16
      ),
    ],
    [at, createRequest]
  );

  const {
    data: { featuredBanners, productCategories, featuredProducts },
    isLoading,
  } = useRequests(requests);

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Banner
            mainTitle="Featured Banners"
            items={featuredBanners.results}
          />
          <Banner
            mainTitle="Categories"
            items={productCategories.results}
            hasLink
            href="/products"
            searchParam="category"
          />
          <Products
            title="Feature Products"
            products={featuredProducts.results}
            showAllProductsButton
          />
        </>
      )}
    </div>
  );
}

export default Home;
