import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const Img = styled.img`
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 40px;
`;

export const SearchForm = styled.form`
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  color: #222222;
  text-decoration: none;

  font-size: 18px;
  font-weight: 400;
`;
