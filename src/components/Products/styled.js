import styled from "styled-components";
import { Button } from "../../styled";

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

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Price = styled.div`
  color: grey;
  font-size: 16px;
`;

export const AddToCart = styled(Button)`
  width: 100%;
  margin-top: 0;
`;

