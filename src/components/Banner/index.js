import AliceCarousel from "react-alice-carousel";
import PropTypes from "prop-types";
import { BannerContainer, Img } from "./styled";
import { StyledLink } from "../../styled";

function Banner({ mainTitle, items, hasLink, href, searchParam }) {
  return (
    <BannerContainer>
      <h1>{mainTitle}</h1>
      <AliceCarousel disableButtonsControls>
        {items.map(({ id, slugs, data: { title, name, main_image } }, index) =>
          hasLink ? (
            <StyledLink
              key={id}
              to={{
                pathname: href,
                search: slugs?.length > 0 ? `?${searchParam}=${slugs[0]}` : "",
              }}
            >
              <div key={id} className="item" data-value={index}>
                <h4>{title ?? name}</h4>
                <Img alt={main_image.alt} src={main_image.url} />
              </div>
            </StyledLink>
          ) : (
            <div key={id} className="item" data-value={index}>
              <h4>{title ?? name}</h4>
              <Img alt={main_image.alt} src={main_image.url} />
            </div>
          )
        )}
      </AliceCarousel>
    </BannerContainer>
  );
}

Banner.propTypes = {
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
};

Banner.defaultProps = {
  mainTitle: "Banner",
  hasLink: false,
  href: "/#",
  searchParam: "category",
};

export default Banner;
