import { useState } from "react";
import PropTypes from "prop-types";

import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";
import "swiper/swiper.scss";
import "./styles.scss";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

function Gallery(props) {
  const { images } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const imagesRender = images.map(({ image: { alt, url } }) => (
    <SwiperSlide key={url}>
      <img src={url} alt={alt} />
    </SwiperSlide>
  ));

  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={images.length > 3}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
      >
        {imagesRender}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={images.length > 3}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        {imagesRender}
      </Swiper>
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        alt: PropTypes.string,
        url: PropTypes.string.isRequired,
      }),
    })
  ),
};

export default Gallery;
