import AliceCarousel from "react-alice-carousel";
import PropTypes from "prop-types";
import BannerItem from "../BannerItem";
import { BannerContainer } from "./styled";
import { StyledLink } from "../../styled";

function Banner(props) {
  const { mainTitle, items, hasLink, href, searchParam } = props;

  return (
    <BannerContainer>
      <h1>{mainTitle}</h1>
      <AliceCarousel disableButtonsControls>
        {items.map(({ id, slugs, data }, index) => {
          const { title, name, main_image } = data;
          const slugParam =
            slugs?.length > 0 ? `?${searchParam}=${slugs[0]}` : "";

          return hasLink ? (
            <StyledLink
              key={id}
              to={{
                pathname: href,
                search: slugParam,
              }}
            >
              <BannerItem
                key={id}
                index={index}
                title={title}
                name={name}
                main_image={main_image}
              />
            </StyledLink>
          ) : (
            <BannerItem
              key={id}
              index={index}
              title={title}
              name={name}
              main_image={main_image}
            />
          );
        })}
      </AliceCarousel>
    </BannerContainer>
  );
}

Banner.propTypes = {
  mainTitle: PropTypes.string,
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
  hasLink: PropTypes.bool,
  href: PropTypes.string,
  searchParam: PropTypes.string,
};

Banner.defaultProps = {
  mainTitle: "Banner",
  hasLink: false,
  href: "/#",
  searchParam: "category",
};

export default Banner;
