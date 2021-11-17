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
      expect(
        screen.queryByText(banner.data.title, { selector: "h4" })
      ).not.toBeInTheDocument();
    }

    //Finished loading
    await waitFor(() => {
      expect(
        screen.queryByTestId("loader", { selector: "div" })
      ).not.toBeInTheDocument();
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
      expect(
        screen.queryByText(category.data.name, { selector: "h4" })
      ).not.toBeInTheDocument();
    }

    //Finished loading
    await waitFor(() => {
      expect(
        screen.queryByTestId("loader", { selector: "div" })
      ).not.toBeInTheDocument();
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
      expect(
        screen.queryByText(product.data.name, { selector: "h4" })
      ).not.toBeInTheDocument();
    }

    //Finished loading
    await waitFor(() => {
      expect(
        screen.queryByTestId("loader", { selector: "div" })
      ).not.toBeInTheDocument();
    });

    for (const product of products) {
      expect(
        screen.getByText(product.data.name, { selector: "h4" })
      ).toBeInTheDocument();
    }
  });
});
