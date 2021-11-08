import { useCart } from "../../hooks";
import { formatter } from "../../utils";
import { Form } from "./styled";
import {
  Flex,
  Button,
  Input,
  TextArea,
  FullWidthTable,
  CenterCell,
  StyledLink,
} from "../../styled";

function Checkout() {
  const { products, total } = useCart();
  const { format } = formatter;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <h1>Checkout</h1>
      <Flex container justifyContent="center">
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <Input
            type="text"
            id="name"
            name="name"
            width="50%"
            textAlign="start"
          />
          <label htmlFor="email">Email:</label>
          <Input
            type="text"
            id="email"
            name="email"
            width="50%"
            textAlign="start"
          />
          <label htmlFor="zip-code">Zip Code:</label>
          <Input
            type="text"
            id="zip-code"
            name="zip-code"
            width="50%"
            textAlign="start"
          />
          <label htmlFor="notes">Notes:</label>
          <TextArea
            name="notes"
            id="notes"
            cols="30"
            rows="10"
            width="50%"
          ></TextArea>
        </Form>
        <Flex container flexDirection="column" flex="1">
          <h2>Order Summary</h2>
          <FullWidthTable>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.data.name}</td>
                    <CenterCell>{product.quantity}</CenterCell>
                    <CenterCell>
                      {format(product.quantity * product.data.price)}
                    </CenterCell>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2">Total:</td>
                <CenterCell>{format(total)}</CenterCell>
              </tr>
            </tfoot>
          </FullWidthTable>
          <Flex container justifyContent="space-between" mobileFlexDirection="row">
            <StyledLink to="cart">
              <Button>Go back to cart</Button>
            </StyledLink>

            <Button>Place Order</Button>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

export default Checkout;
