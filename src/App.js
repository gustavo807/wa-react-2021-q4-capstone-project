import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import {
  Home,
  ProductList,
  ProductDetail,
  SearchResults,
  NotFound,
  Cart,
  Checkout,
} from "./pages";
import GlobalStyle from "./globalStyles";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />

      <Switch>
        <Route path={["/", "/home"]} exact>
          <Home />
        </Route>

        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/product/:productId">
          <ProductDetail />
        </Route>
        <Route path="/search">
          <SearchResults />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
