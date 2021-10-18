import React from "react";
import AliceCarousel from "react-alice-carousel";
import styled from "styled-components";
import PropTypes from "prop-types";

const Img = styled.img`
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
`;

ProductCategories.propTypes = {
  categories: PropTypes.array,
};

ProductCategories.defaultProps = {
  categories: [],
};

function CategoryItem({ category }) {
  const {
    data: {
      name,
      main_image: { url, alt },
    },
  } = category;

  return (
    <div>
      <h4 style={{ textAlign: "center" }}>{name}</h4>
      <Img alt={alt} src={url} />
    </div>
  );
}

function ProductCategories({ categories }) {
  const items = categories.map((category, index) => (
    <CategoryItem key={index} category={category} data-value={index} />
  ));

  return (
    <div className="product-categories">
      <Title>Product Categories</Title>
      <AliceCarousel disableButtonsControls items={items} />
    </div>
  );
}

export default ProductCategories;
