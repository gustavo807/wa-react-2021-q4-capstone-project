import styled from "styled-components";

export const PageDetailWrapper = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const GalleryContainer = styled.div`
  width: 40%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductInfoContainer = styled.div`
  flex: 1;
`;
