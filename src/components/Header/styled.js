import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Img = styled.img`
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 50px;
`;

export const SearchForm = styled.form`
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;


