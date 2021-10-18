import React from "react";
import AliceCarousel from "react-alice-carousel";
import styled from "styled-components";
import categories from "../../mocks/en-us/product-categories.json";

const Img = styled.img`
  width: 100%;
`;

function ProductCategories() {
  const items =
    categories &&
    categories.results.map((category) => (
      <div key={category.id}>
        <h4 style={{ textAlign: "center" }}>{category.data.name}</h4>
        <Img
          alt={category.data.main_image.alt}
          src={category.data.main_image.url}
        />
      </div>
    ));

  return (
    <div className="product-categories">
      <h1 style={{ textAlign: "center" }}>Product Categories</h1>
      <AliceCarousel disableButtonsControls items={items} />
    </div>
  );
}

export default ProductCategories;
