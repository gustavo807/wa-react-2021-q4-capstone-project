import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 40px;
  margin-top: 40px;
  text-align: center;
`;

export const Search = styled.input`
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

export const Submit = styled.input`
  margin: 8px 0;

  background-color: #222222;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  background-color: #222222;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  margin-top: 30px;
`;


export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #222222;
  }
`;