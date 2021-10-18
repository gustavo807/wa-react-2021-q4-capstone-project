import React from "react";
import AliceCarousel from "react-alice-carousel";
import styled from "styled-components";
import PropTypes from "prop-types";

const Img = styled.img`
  width: 100%;
`;

const Container = styled.div`
  margin-bottom: 100px;
`;

const Title = styled.h1`
  text-align: center;
`;

const BannerTitle = styled.h4`
  text-align: center;
`;

FeaturedBanners.propTypes = {
  banners: PropTypes.array,
};

FeaturedBanners.defaultProps = {
  banners: [],
};

function BannerItem({ banner, index }) {
  const {
    data: {
      title,
      main_image: { url, alt },
    },
  } = banner;

  return (
    <div className="item" data-value={index}>
      <BannerTitle>{title}</BannerTitle>
      <Img alt={alt} src={url} />
    </div>
  );
}

function FeaturedBanners({ banners }) {
  const items = banners.map((banner, index) => (
    <BannerItem key={index} banner={banner} index={index} />
  ));

  return (
    <Container>
      <Title>Featured Banners</Title>
      <AliceCarousel disableButtonsControls items={items} />
    </Container>
  );
}

export default FeaturedBanners;
