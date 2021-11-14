import { screen, waitFor, fireEvent } from "@testing-library/react";
import renderWithRouterAndRedux from "../../../utils/renderWithRouterAndRedux";
import App from "../../../App";
import productData from "../../../mocks/en-us/product.json";
import { formatter } from "../../../utils";

const PRODUCT_ID = "YWMHuxIAAC8Azxdw";

describe("Product Detail", () => {
  beforeEach(() => {
    renderWithRouterAndRedux(<App />, { route: `/product/${PRODUCT_ID}` });
  });

  it("should fetch and render product data from API", async () => {
    const product = productData.results[0];
    const { format } = formatter;

    const name = product.data.name;
    const price = format(product.data.price);
    const sku = product.data.sku;
    const category = product.data.category.slug;
    const description = product.data.description[0].text;
    const tags = product.tags;

    // Start Loading
    expect(
      screen.getByTestId("loader", { selector: "div" })
    ).toBeInTheDocument();

    //Finished loading
    await waitFor(() => {
      expect(() => screen.getByTestId("loader", { selector: "div" })).toThrow(
        "Unable to find an element"
      );
    });

    //Product data
    expect(screen.getByText(name, { selector: "span" })).toBeInTheDocument();

    expect(
      screen.getByText(`Price: ${price}`, { selector: "span" })
    ).toBeInTheDocument();

    expect(
      screen.getByText(`SKU: ${sku}`, { selector: "span" })
    ).toBeInTheDocument();

    expect(
      screen.getByText(`Category: ${category}`, { selector: "span" })
    ).toBeInTheDocument();

    for (const tag of tags) {
      expect(screen.getByText(tag, { selector: "li" })).toBeInTheDocument();
    }

    expect(
      screen.getByText(description, { selector: "span" })
    ).toBeInTheDocument();
  });

  it("should contains a quantity selector and the Add to Cart button", async () => {
    const addToCart = await screen.findByRole("button", {
      name: /Add To Cart/i,
    });

    expect(addToCart).toBeInTheDocument();

    expect(screen.getByText("+", { selector: "button" })).toBeInTheDocument();
    expect(screen.getByText("-", { selector: "button" })).toBeInTheDocument();
  });

  it("should validate that after clicking on the Add to Cart button, the total is count in the cart is updated.", async () => {
    expect(screen.getByTestId("total-count")).toHaveTextContent(""); //Total Count is empty

    const addToCart = await screen.findByRole("button", {
      name: /Add To Cart/i,
    });
    fireEvent.click(addToCart);

    expect(screen.getByTestId("total-count")).toHaveTextContent("(1)"); //Total Count is updated
  });

  it("should validate the Out of stock functionality, the Add to Cart button is disabled", async () => {
    const product = productData.results[0];
    const stock = product.data.stock;

    const increment = await screen.findByRole("button", {
      name: "+",
    });

    //Add To Cart button exists in the document
    expect(
      screen.getByText(/Add To Cart/i, { selector: "button" })
    ).toBeInTheDocument();
    //The Out of stock message doesn't exists
    expect(() =>
      screen.getByText(/Out of stock/i, { selector: "span" })
    ).toThrow("Unable to find an element");

    //Increment quantity
    for (let index = 1; index < stock; index++) {
      fireEvent.click(increment);
    }

    // Act Click Add To Cart button
    const addToCart = screen.getByText("Add To Cart", { selector: "button" });
    fireEvent.click(addToCart);

    //The Out of stock message exists in the document
    expect(
      screen.getByText(/Out of stock/i, { selector: "span" })
    ).toBeInTheDocument();
    //The Add to Cart button doesn't exists
    expect(() =>
      screen.getByText(/Add To Cart/i, { selector: "button" })
    ).toThrow("Unable to find an element");
  });
});
