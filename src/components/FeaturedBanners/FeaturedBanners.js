import React from "react";
import products from "../../mocks/en-us/featured-banners.json";
import AliceCarousel from "react-alice-carousel";
import styled from "styled-components";
import "./FeaturedBanners.scss";

const Img = styled.img`
  width: 100%;
`;

function FeaturedBanners() {
  const items = products.results.map((product, i) => (
    <div className="item" data-value={i} key={product.id}>
      <h4 style={{ textAlign: "center" }}>{product.data.title}</h4>
      <Img
        alt={product.data.main_image.alt}
        src={product.data.main_image.url}
      />
    </div>
  ));

  return (
    <div className="featured-banners">
      <h1 className="title" style={{ textAlign: "center" }}>
        Featured Banners
      </h1>
      <AliceCarousel disableButtonsControls items={items} />
    </div>
  );
}

export default FeaturedBanners;
