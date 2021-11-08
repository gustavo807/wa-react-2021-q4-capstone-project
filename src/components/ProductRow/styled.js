import styled from "styled-components";
import { Input } from "../../styled";

export const InputUpdate = styled(Input)`
  padding: 0;
  margin: 0;
  width: 100px;

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

export const StyledRemove = styled.i`
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 22px;
  height: 22px;
  border: 2px solid;
  border-radius: 22px;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 2px;
    background: currentColor;
    border-radius: 5px;
    top: 8px;
    left: 4px;
  }
`;
