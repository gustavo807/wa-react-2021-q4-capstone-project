import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 200px;
  line-height: 200px;
  text-align: center;
  background-color: #222222;
  color: #777777;
  margin-top: 50px;

  @media (max-width: 768px) {
    line-height: normal;
    padding-top: 25%;
  }
`;
