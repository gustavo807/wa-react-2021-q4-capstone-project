export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const productQty = (products = [], product = {}) => {
  const currQty = products.find((p) => p.id === product.id)?.quantity || 0;
  const isDisabled = currQty === product.data.stock;

  return { currQty, isDisabled };
};
