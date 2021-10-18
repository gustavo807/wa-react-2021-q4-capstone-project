import React, { Fragment } from "react";
import { Header, Footer } from "./components";
import { Home } from "./pages";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import "./App.scss";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
