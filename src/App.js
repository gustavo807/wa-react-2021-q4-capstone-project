import React, { Fragment, useState } from "react";
import { Header, Footer } from "./components";
import { Home, ProductList } from "./pages";
import GlobalStyle from "./globalStyles";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

function App() {
  const [currentView, setCurrentView] = useState("Home");

  function handleChangeView(page) {
    setCurrentView(page);
  }

  return (
    <Fragment>
      <GlobalStyle />
      <Header changeView={handleChangeView} />

      {currentView === "Home" ? (
        <Home changeView={handleChangeView} />
      ) : (
        <ProductList />
      )}

      <Footer />
    </Fragment>
  );
}

export default App;
