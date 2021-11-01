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

function Gallery({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
        {images.map(({ image: { alt, url } }) => (
          <SwiperSlide key={url}>
            <img src={url} alt={alt} />
          </SwiperSlide>
        ))}
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
        {images.map(({ image: { alt, url } }) => (
          <SwiperSlide key={url}>
            <img src={url} alt={alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Gallery;
