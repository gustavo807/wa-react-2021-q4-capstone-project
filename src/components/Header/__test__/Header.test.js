import { screen } from "@testing-library/react";
import renderWithRouterAndRedux from "../../../utils/renderWithRouterAndRedux";
import App from "../../../App";
import logoImage from "../../../assets/images/store-logo.png";

describe("Home Page", () => {
  beforeEach(() => {
    renderWithRouterAndRedux(<App />);
  });

  it("should render the Store logo in the Header component", () => {
    const storeLogo = screen.getByTestId("store-logo");

    expect(storeLogo).toHaveAttribute("src", logoImage);
  });
});
