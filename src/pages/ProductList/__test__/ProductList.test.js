import { screen, waitFor, fireEvent } from "@testing-library/react";
import renderWithRouterAndRedux from "../../../utils/renderWithRouterAndRedux";
import App from "../../../App";
import productCategories from "../../../mocks/en-us/product-categories.json";
import productsData from "../../../mocks/en-us/products.json";

describe("Product List", () => {
  beforeEach(() => {
    renderWithRouterAndRedux(<App />, { route: "/products" });
  });

  it("should fetch and render product categories sidebar data from API", async () => {
    const categories = productCategories.results;

    await waitFor(() => {
      for (const category of categories) {
        expect(screen.getByText(category.data.name)).toBeInTheDocument();
      }
    });
  });

  it("should filter products when clicking on a category link", async () => {
    const categoryLink = await screen.findByText(/Kitchen/i);

    expect(screen.queryByText(/No Products found./i)).not.toBeInTheDocument();

    fireEvent.click(categoryLink);

    expect(screen.getByText(/No Products found./i)).toBeInTheDocument();
  });

  it("should pagination controls generated correctly based on the number of results feteched from API", async () => {
    const products = productsData.results;
    const itemsPerPage = 12;
    const pages = Math.ceil(products.length / itemsPerPage);

    const prevLink = await screen.findByText("«", { selector: "li" });
    const nextLink = screen.getByText("»", { selector: "li" });

    expect(prevLink).toBeInTheDocument();
    expect(nextLink).toBeInTheDocument();

    for (let currPage = 1; currPage < pages; currPage++) {
      expect(
        screen.getByText(currPage, { selector: "li" })
      ).toBeInTheDocument();
    }
  });

  it("should be the prev button disabled when the user is on the first page", async () => {
    await waitFor(() => {
      expect(screen.getByText("«", { selector: "li" })).toHaveClass("disabled");
    });
  });

  it("should works the Next button", async () => {
    const nextLink = await screen.findByText("»", { selector: "li" });
    const pageOneLink = screen.getByText("1", { selector: "li" });
    const pageTwoLink = screen.getByText("2", { selector: "li" });

    expect(pageOneLink).toHaveClass("active");
    expect(pageTwoLink).not.toHaveClass("active");

    fireEvent.click(nextLink);

    expect(pageOneLink).not.toHaveClass("active");
    expect(pageTwoLink).toHaveClass("active"); //Current page
  });

  it("should works the Prev button", async () => {
    const prevLink = await screen.findByText("«", { selector: "li" });
    const nextLink = screen.getByText("»", { selector: "li" });
    const pageOneLink = screen.getByText("1", { selector: "li" });
    const pageTwoLink = screen.getByText("2", { selector: "li" });

    fireEvent.click(nextLink);

    expect(pageOneLink).not.toHaveClass("active");
    expect(pageTwoLink).toHaveClass("active");

    fireEvent.click(prevLink);

    expect(pageOneLink).toHaveClass("active"); // Current page
    expect(pageTwoLink).not.toHaveClass("active");
  });

  it("should be the Next button disabled when the user is on the last page", async () => {
    const products = productsData.results;
    const itemsPerPage = 12;
    const pages = Math.ceil(products.length / itemsPerPage);

    const nextLink = await screen.findByText("»", { selector: "li" });

    expect(nextLink).not.toHaveClass("disabled");

    for (let currPage = 1; currPage < pages; currPage++) {
      fireEvent.click(nextLink);
    }

    expect(nextLink).toHaveClass("disabled");
  });
});
