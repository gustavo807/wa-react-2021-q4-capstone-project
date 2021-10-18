import React from "react";
import logoImage from "../../assets/images/store-logo.png";
import shoppingCartLogo from "../../assets/images/shopping-cart.png";
import StoreLogo from "./StoreLogo";
import ShoppingCart from "./ShoppingCart";
import Search from "./Search";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

function Header() {
  return (
    <header>
      <Wrapper className="container">
        <StoreLogo logo={logoImage} width="auto" />
        <Search />
        <ShoppingCart logo={shoppingCartLogo} width={50} />
      </Wrapper>
    </header>
  );
}

export default Header;
