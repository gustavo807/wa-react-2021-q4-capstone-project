import styled from "styled-components";

export const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 220px);
  place-content: center;
  gap: 1rem;
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  margin: auto;
  text-align: center;
  font-family: arial;
  height: 100%;

  img {
    width: 100%;
  }
`;

export const Price = styled.div`
  color: grey;
  font-size: 16px;
`;
