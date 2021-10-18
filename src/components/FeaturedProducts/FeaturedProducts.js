import React from "react";
import ProductItem from "./ProductItem";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 100px;
  margin-top: 100px;
`;

const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 220px);
  place-content: center;
  gap: 1rem;
`;

const Title = styled.h1`
  text-align: center;
`;

FeaturedProducts.propTypes = {
  products: PropTypes.array,
};

FeaturedProducts.defaultProps = {
  products: [],
};

function FeaturedProducts({ products }) {
  return (
    <Container>
      <Title>Feature Products</Title>
      <CardsWrapper>
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </CardsWrapper>
    </Container>
  );
}

export default FeaturedProducts;
