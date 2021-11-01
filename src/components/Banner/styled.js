import styled from "styled-components";
import { Container } from "../../styled";

export const BannerContainer = styled(Container)`
  .alice-carousel__dots-item {
    background-color: #b4adad;
  }

  .alice-carousel__dots-item:hover {
    background-color: #777777;
  }
  .alice-carousel__dots-item.__active {
    background-color: #222222;
  }
`;

export const Img = styled.img`
  width: 100%;
`;
