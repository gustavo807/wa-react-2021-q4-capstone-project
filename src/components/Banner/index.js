import AliceCarousel from "react-alice-carousel";
import PropTypes from "prop-types";
import { BannerContainer } from "./styled";

function Banner({ mainTitle, items }) {
  return (
    <BannerContainer>
      <h1>{mainTitle}</h1>
      <AliceCarousel disableButtonsControls>
        {items.map(
          (
            {
              id,
              data: {
                title,
                name,
                main_image: { url, alt },
              },
            },
            index
          ) => (
            <div key={id} className="item" data-value={index}>
              <h4>{title ?? name}</h4>
              <img alt={alt} src={url} />
            </div>
          )
        )}
      </AliceCarousel>
    </BannerContainer>
  );
}

Banner.propTypes = {
  items: PropTypes.array,
  mainTitle: PropTypes.string,
};

Banner.defaultProps = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      data: PropTypes.shape({
        name: PropTypes.string,
        title: PropTypes.string,
        main_image: PropTypes.shape({
          url: PropTypes.string.isRequired,
          alt: PropTypes.string,
        }),
      }),
    })
  ),
  mainTitle: "Banner",
};

export default Banner;
