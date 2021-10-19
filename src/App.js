import React, { Fragment } from "react";
import { Header, Footer } from "./components";
import { Home } from "./pages";
import GlobalStyle from "./globalStyles";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
