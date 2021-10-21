import { useState, useEffect } from "react";
import productsData from "../../mocks/en-us/products.json";

function useProducts(filters = []) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setProducts(
      productsData.results.filter(
        ({
          data: {
            category: { id },
          },
        }) => filters.length === 0 || filters.includes(id)
      )
    );
  }, [filters]);

  return [products, isLoading];
}

export default useProducts;
