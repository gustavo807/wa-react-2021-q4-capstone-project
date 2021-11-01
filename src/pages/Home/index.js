import React, { useMemo } from "react";
import { Banner, Products, Loader } from "../../components";
import { useRequests } from "../../hooks";

function Home() {
  const requests = useMemo(
    () => [
      {
        name: "featuredBanners",
        params: {
          q: '[[at(document.type, "banner")]]',
          pageSize: 5,
        },
      },
      {
        name: "productCategories",
        params: {
          q: '[[at(document.type, "category")]]',
          pageSize: 30,
        },
      },
      {
        name: "featuredProducts",
        params: {
          q: [
            '[[at(document.type, "product")]]',
            '[[at(document.tags, ["Featured"])]]',
          ],
          pageSize: 16,
        },
      },
    ],
    []
  );

  const {
    data: { featuredBanners, productCategories, featuredProducts },
    isLoading,
  } = useRequests(requests);

  if (isLoading) return <Loader />;

  return (
    <div className="container">
      <Banner mainTitle="Featured Banners" items={featuredBanners.results} />
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
    </div>
  );
}

export default Home;
