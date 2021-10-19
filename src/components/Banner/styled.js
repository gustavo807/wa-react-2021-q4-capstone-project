import styled from "styled-components";
import { Container } from "../../styled";

export const BannerContainer = styled(Container)`
  img {
    width: 100%;
  }

  .alice-carousel__dots-item {
    background-color: #b4adad;
  }

  .alice-carousel__dots-item:hover {
    background-color: #807d7d;
  }
  .alice-carousel__dots-item.__active {
    background-color: #222222;
  }
`;
