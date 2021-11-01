import { useMemo } from "react";
import { useParams } from "react-router";
import { Loader, Gallery, ProductInfo } from "../../components";
import { useRequests } from "../../hooks";
import {
  PageDetailWrapper,
  ProductInfoContainer,
  GalleryContainer,
} from "./styled";

function ProductDetail() {
  const { productId } = useParams();

  const requests = useMemo(
    () => [
      {
        name: "productData",
        params: {
          q: `[[:d+=+at(document.id,+"${productId}")+]]`,
        },
      },
    ],
    [productId]
  );

  const {
    data: { productData },
    isLoading,
  } = useRequests(requests);

  if (isLoading) return <Loader />;

  const {
    tags,
    data: { name, price, sku, category, description, specs, images },
  } = productData.results[0];

  return (
    <div className="container">
      {productData?.results_size === 0 ? (
        <div>Not Product Found.</div>
      ) : (
        <PageDetailWrapper>
          <GalleryContainer>
            <Gallery images={images} />
          </GalleryContainer>
          <ProductInfoContainer>
            <ProductInfo
              name={name}
              price={price}
              sku={sku}
              category={category}
              description={description}
              specs={specs}
              tags={tags}
            />
          </ProductInfoContainer>
        </PageDetailWrapper>
      )}
    </div>
  );
}

export default ProductDetail;
