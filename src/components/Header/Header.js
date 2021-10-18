import React from "react";
import logoImage from "../../assets/images/store-logo.png";
import shoppingCartLogo from "../../assets/images/shopping-cart.png";
import StoreLogo from "./StoreLogo";
import ShoppingCart from "./ShoppingCart";
import Search from "./Search";
import "./Header.scss";

function Header() {
  return (
    <header>
      <div className="header container">
        <StoreLogo logo={logoImage} width="auto" />
        <Search />
        <ShoppingCart logo={shoppingCartLogo} width={50} />
      </div>
    </header>
  );
}

export default Header;
