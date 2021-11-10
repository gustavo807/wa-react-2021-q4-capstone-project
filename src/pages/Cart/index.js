import { ProductRow } from "../../components";
import ErrorBoundary from "../../error";
import { useCart } from "../../hooks";
import { Button, Flex, StyledLink, FullWidthTable } from "../../styled";
import { formatter } from "../../utils";

function Cart() {
  const { products, total, dispatch, clear } = useCart();
  const { format } = formatter;

  const handleClearCart = () => {
    dispatch(clear());
  };

  return (
    <div className="container">
      {products.length === 0 ? (
        <div>
          <h1>Shopping Cart is Empty</h1>
          <p>You have no items in your shopping cart.</p>
        </div>
      ) : (
        <>
          <h1>Shopping Cart</h1>
          <div style={{ overflowX: "auto" }}>
            <ErrorBoundary>
              <FullWidthTable>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => {
                    return <ProductRow key={product.id} product={product} />;
                  })}
                </tbody>
              </FullWidthTable>
            </ErrorBoundary>
          </div>

          <Button onClick={handleClearCart}>Clear Shopping Cart</Button>

          <Flex container flexDirection="column" alignItems="flex-end">
            <h3>Cart Total: {format(total)}</h3>
            <StyledLink to="/checkout">
              <Button className="lg">Proceed to checkout</Button>
            </StyledLink>
          </Flex>
        </>
      )}
    </div>
  );
}

export default Cart;
