import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logoImg from "../../assets/images/store-logo.png";
import shoppingCartImg from "../../assets/images/shopping-cart.png";
import { Search, Submit } from "../../styled";
import { Container, Img, Icon, SearchForm } from "./styled";

function Header() {
  let history = useHistory();
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/search?q=${value}`);
    setValue("");
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
          <Search
            type="text"
            placeholder="Search"
            value={value}
            required
            onChange={(event) => setValue(event.target.value)}
          />
          <Submit type="submit" value="Submit" />
        </SearchForm>

        <Icon
          src={shoppingCartImg}
          alt="Shopping Cart"
          className="shopping-cart"
        />
      </Container>
    </header>
  );
}

export default Header;
