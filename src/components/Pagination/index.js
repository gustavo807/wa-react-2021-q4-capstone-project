import { Wrapper } from "./styled";

function Pagination() {
  return (
    <Wrapper>
      <a href="#/">&laquo;</a>
      <a href="#/" className="active">
        1
      </a>
      <a href="#/">2</a>
      <a href="#/">3</a>
      <a href="#/">4</a>
      <a href="#/">5</a>
      <a href="#/">6</a>
      <a href="#/">&raquo;</a>
    </Wrapper>
  );
}

export default Pagination;
