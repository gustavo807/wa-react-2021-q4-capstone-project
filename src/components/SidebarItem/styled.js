import styled from "styled-components";

export const Item = styled.div`
  display: block;
  padding: 16px;
  cursor: pointer;

  &.active {
    background-color: #222222;
    color: white;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover:not(.active) {
      background-color: #777777;
      color: white;
    }
  }
`;
