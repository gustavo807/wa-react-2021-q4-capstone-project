import styled from "styled-components";

export const List = styled.ul`
  display: inline-block;

  display: flex;
  justify-content: center;
  list-style-type: none;
`;

export const Item = styled.li`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  border: 1px solid #ddd;
  cursor: pointer;

  &.active {
    pointer-events: none;
    background-color: #222222;
    color: white;
    border: 1px solid #222222;
  }

  &:hover:not(.active) {
    background-color: #b4adad;
  }

  &.dots:hover {
    background-color: transparent;
    cursor: default;
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;
