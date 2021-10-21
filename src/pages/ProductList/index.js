import { useState, useCallback } from "react";
import { Products, Loader, SidebarItem, Pagination } from "../../components";
import { useProducts } from "../../hooks";
import classNames from "classnames";
import categoriesData from "../../mocks/en-us/product-categories.json";
import "./ProductList.scss";

function ProductList() {
  const [filters, setFilters] = useState([]);
  const [products, isLoading] = useProducts(filters);

  const handleClick = useCallback(
    (categoryId) => {
      setFilters((prevFilters) =>
        prevFilters.includes(categoryId)
          ? prevFilters.filter((i) => i !== categoryId)
          : [...prevFilters, categoryId]
      );
    },
    [setFilters]
  );

  return (
    <div>
      <h1 className="text-center">This is the Product List Page</h1>

      <div className="wrapper-product-list">
        <div className={classNames({ sidebar: true, loading: isLoading })}>
          {categoriesData.results.map(({ id, data: { name } }) => (
            <SidebarItem key={id} id={id} name={name} onClick={handleClick} />
          ))}
        </div>

        <div className="content">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Products products={products} />
              <Pagination />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProductList;
