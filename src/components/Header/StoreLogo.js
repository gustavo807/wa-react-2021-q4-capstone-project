import PropTypes from "prop-types";
import styled from "styled-components";

const Img = styled.img`
  cursor: pointer;
`;

StoreLogo.propTypes = {
  logo: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

StoreLogo.defaultProps = {
  width: 50,
  className: "store-logo",
  alt: "Store Logo",
};

function StoreLogo(props) {
  const { logo, width, className, alt } = props;
  return (
    <Img className={className} alt={alt} src={logo} style={{ width: width }} />
  );
}

export default StoreLogo;
