import { screen, waitFor } from "@testing-library/react";
import renderWithRouterAndRedux from "../../../utils/renderWithRouterAndRedux";
import App from "../../../App";
import featuredBanners from "../../../mocks/en-us/featured-banners.json";
import productCategories from "../../../mocks/en-us/product-categories.json";
import featuredProducts from "../../../mocks/en-us/featured-products.json";

describe("Home Page", () => {
  beforeEach(() => {
    renderWithRouterAndRedux(<App />);
  });

  it("should fetch and render Featured Banners from API", async () => {
    const banners = featuredBanners.results;
    //Start Loading
    expect(
      screen.getByTestId("loader", { selector: "div" })
    ).toBeInTheDocument();

    for (const banner of banners) {
      expect(() =>
        screen.getByText(banner.data.title, { selector: "h4" })
      ).toThrow("Unable to find an element");
    }

    //Finished loading
    await waitFor(() => {
      expect(() => screen.getByTestId("loader", { selector: "div" })).toThrow(
        "Unable to find an element"
      );
    });

    for (const banner of banners) {
      expect(
        screen.getByText(banner.data.title, { selector: "h4" })
      ).toBeInTheDocument();
    }
  });

  it("should fetch and render Product Categories from API", async () => {
    const categories = productCategories.results;

    //Start Loading
    expect(
      screen.getByTestId("loader", { selector: "div" })
    ).toBeInTheDocument();

    for (const category of categories) {
      expect(() =>
        screen.getByText(category.data.name, { selector: "h4" })
      ).toThrow("Unable to find an element");
    }

    //Finished loading
    await waitFor(() => {
      expect(() => screen.getByTestId("loader", { selector: "div" })).toThrow(
        "Unable to find an element"
      );
    });

    for (const category of categories) {
      expect(
        screen.getByText(category.data.name, { selector: "h4" })
      ).toBeInTheDocument();
    }
  });

  it("should fetch and render Featured Products from API", async () => {
    const products = featuredProducts.results;
    //Start Loading
    expect(
      screen.getByTestId("loader", { selector: "div" })
    ).toBeInTheDocument();

    for (const product of products) {
      expect(() =>
        screen.getByText(product.data.name, { selector: "h4" })
      ).toThrow("Unable to find an element");
    }

    //Finished loading
    await waitFor(() => {
      expect(() => screen.getByTestId("loader", { selector: "div" })).toThrow(
        "Unable to find an element"
      );
    });

    for (const product of products) {
      expect(
        screen.getByText(product.data.name, { selector: "h4" })
      ).toBeInTheDocument();
    }
  });
});
