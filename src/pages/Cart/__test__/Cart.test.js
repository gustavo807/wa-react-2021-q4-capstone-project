import { screen, fireEvent } from "@testing-library/react";
import renderWithRouterAndRedux from "../../../utils/renderWithRouterAndRedux";
import App from "../../../App";
import { formatter } from "../../../utils";
import initialState from "../../../mocks/en-us/redux-state.json";

describe("Shopping Cart Empty State", () => {
  it("should display an empty state when there are no items in the cart", async () => {
    renderWithRouterAndRedux(<App />, {
      route: `/cart`,
    });

    expect(screen.getByText(/Shopping Cart is Empty/i)).toBeInTheDocument();
  });
});

describe("Shopping Cart with initial state", () => {
  beforeEach(() => {
    renderWithRouterAndRedux(<App />, {
      route: `/cart`,
      initialState: initialState,
    });
  });

  it("should validate the list of the products is shown when there are items in the cart", () => {
    const { products } = initialState.cart;
    const { format } = formatter;

    for (const product of products) {
      const formattedPrice = format(product.data.price);
      const formattedSubtotal = format(product.data.price * product.quantity);

      expect(screen.getByText(product.data.name)).toBeInTheDocument();
      expect(screen.getByTestId(`price-${product.id}`)).toHaveTextContent(
        formattedPrice
      );
      expect(screen.getByTestId(`subtotal-${product.id}`)).toHaveTextContent(
        formattedSubtotal
      );
      expect(
        screen.getByTestId(`remove-icon-${product.id}`)
      ).toBeInTheDocument();
      expect(screen.getByTestId(`quantity-${product.id}`)).toBeInTheDocument();
    }
  });

  it("should validate the cart total label display the sum of the subtotals of all items in the cart", () => {
    const { format } = formatter;
    const cartTotal = format(initialState.cart.total);

    expect(screen.getByText(`Cart Total: ${cartTotal}`)).toBeInTheDocument();
  });

  it("should update the total items in the cart when using the quantity selector for a particular product and validate the out of stock", () => {
    const [firstProduct] = initialState.cart.products;
    const { stock } = firstProduct.data;
    const currQuantity = firstProduct.quantity;
    const countItems = initialState.cart.count;

    const increment = screen.getByTestId(`increment-${firstProduct.id}`);
    const totalCount = screen.getByTestId("total-count");

    expect(increment).not.toBeDisabled();
    expect(totalCount).toHaveTextContent(`(${countItems})`);

    //Act increment quantity
    for (let index = currQuantity; index < stock; index++) {
      fireEvent.click(increment);
    }

    const newCountItems = countItems + (stock - currQuantity);

    expect(increment).toBeDisabled(); //Increment button disabled
    expect(totalCount).toHaveTextContent(`(${newCountItems})`); //New count total items
  });

  it("should validate that a product can be removed after clicking on the remove icon", () => {
    const [firstProduct] = initialState.cart.products;
    const removeIcon = screen.getByTestId(`remove-icon-${firstProduct.id}`);

    expect(screen.getByText(firstProduct.data.name)).toBeInTheDocument();

    fireEvent.click(removeIcon);

    expect(screen.queryByText(firstProduct.data.name)).not.toBeInTheDocument();
  });

  it("should show the total items in the cart", async () => {
    const totalCount = screen.getByTestId("total-count");
    const { count } = initialState.cart;

    expect(totalCount).toHaveTextContent(`(${count})`);
  });

  it("should show the empty state message when clicking on clear shopping cart button", () => {
    expect(screen.queryByText(/Shopping Cart is Empty/i)).not.toBeInTheDocument();

    const clearCart = screen.getByText(/Clear Shopping Cart/i, {
      selector: "button",
    });
    fireEvent.click(clearCart);

    expect(screen.getByText(/Shopping Cart is Empty/i)).toBeInTheDocument();
  });
});
