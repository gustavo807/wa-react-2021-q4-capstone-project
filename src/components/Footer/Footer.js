import React from "react";
import styled from "styled-components";

const Container = styled.div`
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

function Footer() {
  return (
    <Container>
      <p>Ecommerce created during Wizeline’s Academy React Bootcamp</p>
    </Container>
  );
}

export default Footer;
