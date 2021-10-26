import App from "../App";
import { render, screen, fireEvent } from "@testing-library/react";

describe("<App />", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should see the 'This is the Product List Page' message when clicking the 'View all products' button", () => {
    const button = screen.getByTestId("view-all-products");

    fireEvent.click(button);

    expect(
      screen.getByText(/This is the Product List Page/i)
    ).toBeInTheDocument();
  });

  it("not should see the 'This is the Product List Page' message when clicking the Store Logo image", () => {
    const storeLogo = screen.getByTestId("store-logo");

    fireEvent.click(storeLogo);

    expect(() => screen.getByText(/This is the Product List Page/i)).toThrow(
      "Unable to find an element"
    );
  });

  it("should see the 'Featured Banners' message when clicking the Store logo image", () => {
    const storeLogo = screen.getByTestId("store-logo");

    fireEvent.click(storeLogo);

    expect(screen.getByText(/Featured Banners/i)).toBeInTheDocument();
  });
});
