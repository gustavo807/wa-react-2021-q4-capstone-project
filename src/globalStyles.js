import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    color: #222222;
    background: #fff;
  }

  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  
    @media (min-width: 768px) {
      & {
        width: 750px;
      }
    }
    @media (min-width: 992px) {
      & {
        width: 970px;
      }
    }
    @media (min-width: 1200px) {
      & {
        width: 1170px;
      }
    }
  }

  .text-center{
    text-align: center;
  }
  
`;

export default GlobalStyle;
