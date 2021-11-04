import { useMemo } from "react";
import { useParams } from "react-router";
import { Loader, Gallery, ProductInfo } from "../../components";
import { usePrismic, useRequests } from "../../hooks";
import {
  PageDetailWrapper,
  ProductInfoContainer,
  GalleryContainer,
} from "./styled";

function ProductDetail() {
  const { productId } = useParams();
  const { at, createRequest } = usePrismic();

  const requests = useMemo(
    () => [createRequest("productData", [at("document.id", productId)])],
    [at, createRequest, productId]
  );

  const {
    data: { productData },
    isLoading,
  } = useRequests(requests);

  const { tags, data } = productData?.results[0] ?? {};

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : productData?.results_size === 0 ? (
        <div>Not Product Found.</div>
      ) : (
        <PageDetailWrapper>
          <GalleryContainer>
            <Gallery images={data.images} />
          </GalleryContainer>
          <ProductInfoContainer>
            <ProductInfo
              name={data.name}
              price={data.price}
              sku={data.sku}
              category={data.category}
              description={data.description}
              specs={data.specs}
              tags={tags}
            />
          </ProductInfoContainer>
        </PageDetailWrapper>
      )}
    </div>
  );
}

export default ProductDetail;
