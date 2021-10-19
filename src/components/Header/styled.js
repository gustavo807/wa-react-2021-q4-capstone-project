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

  img {
    cursor: pointer;
  }

  .shopping-cart {
    width: 50px;
  }

  input {
    width: 50%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
