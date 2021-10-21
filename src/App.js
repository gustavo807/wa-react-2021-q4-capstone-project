import React, { Fragment, useState } from "react";
import { Header, Footer } from "./components";
import { Home, ProductList } from "./pages";
import GlobalStyle from "./globalStyles";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

function App() {
  const [currentView, setCurrentView] = useState("Home");

  return (
    <Fragment>
      <GlobalStyle />
      <Header onClick={(page) => setCurrentView(page)} />

      {currentView === "Home" ? (
        <Home onClick={(page) => setCurrentView(page)} />
      ) : (
        <ProductList />
      )}

      <Footer />
    </Fragment>
  );
}

export default App;
