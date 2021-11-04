import styled from "styled-components";
import { Button } from "../../styled";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonPagination = styled(Button)`
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
