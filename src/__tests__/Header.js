import { Header } from "../components";
import { render } from "@testing-library/react";
import logoImage from "../assets/images/store-logo.png";

describe("<Header />", () => {
  it("should render the Store logo in the Header component", () => {
    const { getByTestId } = render(<Header />);
    const storeLogo = getByTestId("store-logo");

    expect(storeLogo).toHaveAttribute("src", logoImage);
  });
});
