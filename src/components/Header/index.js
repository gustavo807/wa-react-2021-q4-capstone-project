import { Link, useHistory } from "react-router-dom";
import logoImg from "../../assets/images/store-logo.png";
import shoppingCartImg from "../../assets/images/shopping-cart.png";
import { Input, Submit } from "../../styled";
import { Container, Img, Icon, SearchForm, StyledLink } from "./styled";
import { useInput, useCart } from "../../hooks";

function Header() {
  let history = useHistory();
  const { value, resetValue, bind } = useInput("");

  const { count } = useCart();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/search?q=${value}`);
    resetValue();
  };

  return (
    <header>
      <Container className="container">
        <Link to="/">
          <Img
            src={logoImg}
            alt="Store Logo"
            className="store-logo"
            data-testid="store-logo"
          />
        </Link>

        <SearchForm onSubmit={handleSubmit}>
          <Input
            width="50%"
            mobileWidth="100%"
            type="text"
            placeholder="Search"
            {...bind}
            required
          />
          <Submit type="submit" value="Submit" />
        </SearchForm>

        <StyledLink to="/cart">
          <Icon
            src={shoppingCartImg}
            alt="Shopping Cart"
            className="shopping-cart"
          />
          {count > 0 && ` (${count}) `}
        </StyledLink>
      </Container>
    </header>
  );
}

export default Header;
