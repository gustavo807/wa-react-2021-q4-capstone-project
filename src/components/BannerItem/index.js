import PropTypes from "prop-types";
import { FullWidthImage } from "./styled";

function BannerItem(props) {
  const { title, name, main_image, index } = props;

  return (
    <div className="item" data-value={index}>
      <h4>{title ?? name}</h4>
      <FullWidthImage alt={main_image.alt} src={main_image.url} />
    </div>
  );
}

BannerItem.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  main_image: PropTypes.shape({
    alt: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default BannerItem;
