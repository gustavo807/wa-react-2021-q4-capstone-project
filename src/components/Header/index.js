import logoImg from "../../assets/images/store-logo.png";
import shoppingCartImg from "../../assets/images/shopping-cart.png";
import { Container } from "./styled";

function Header({ changeView }) {
  return (
    <header>
      <Container className="container">
        <img
          onClick={() => changeView("Home")}
          src={logoImg}
          alt="Store Logo"
          className="store-logo"
        />
        <input type="text" placeholder="Search" />
        <img
          src={shoppingCartImg}
          alt="Shopping Cart"
          className="shopping-cart"
        />
      </Container>
    </header>
  );
}

export default Header;
