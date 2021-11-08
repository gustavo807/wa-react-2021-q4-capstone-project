import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-left: 30px;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const Title = styled.span`
  font-size: 30px;
`;

export const Price = styled.span`
  padding-top: 20px;
  font-size: 20px;
  align-self: flex-start;
`;

export const Sku = styled.span`
  font-size: 20px;
  align-self: flex-start;
`;

export const Category = styled.span`
  font-size: 20px;
  align-self: flex-start;
`;

export const Stock = styled.span`
  font-size: 20px;
  align-self: flex-start;
`;

export const Tags = styled.span`
  font-size: 20px;
  align-self: flex-start;
`;

export const Description = styled.span`
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  word-break: break-all;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;

  width: 100%;
`;
