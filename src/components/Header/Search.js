import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled.input`
  width: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

Search.propTypes = {
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  placeholder: "Search",
};

function Search(props) {
  const { placeholder } = props;
  return <Input type="text" placeholder={placeholder} />;
}

export default Search;
