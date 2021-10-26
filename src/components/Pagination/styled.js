import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-block;

  display: flex;
  justify-content: center;

  & a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
  }

  & a.active {
    background-color: #222222;
    color: white;
    border: 1px solid #222222;
  }

  & a:hover:not(.active) {
    background-color: #b4adad;
  }
`;
