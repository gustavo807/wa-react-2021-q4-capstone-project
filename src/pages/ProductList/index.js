import { useState, useCallback, useMemo, useEffect } from "react";
import { Products, Loader, SidebarItem, Pagination } from "../../components";
import { useQuery, useRequests } from "../../hooks";
import classNames from "classnames";
import { Button } from "../../styled";
import {
  WrapperProductList,
  Sidebar,
  SidebarTitle,
  ClearFilters,
  Content,
} from "./styled";

let PageSize = 12;

function ProductList() {
  let query = useQuery();
  let categorySlug = query.get("category");

  const requests = useMemo(
    () => [
      {
        name: "productCategories",
        params: {
          q: '[[at(document.type, "category")]]',
          pageSize: 30,
        },
      },
      {
        name: "productsList",
        params: {
          q: '[[at(document.type, "product")]]',
          pageSize: 100,
        },
      },
    ],
    []
  );

  const {
    data: { productCategories, productsList },
    isLoading,
  } = useRequests(requests);

  const [products, setProducts] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const currentProducts = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, products]);

  useEffect(() => {
    if (isLoading || !categorySlug) {
      return () => {};
    }

    for (const category of productCategories.results) {
      if (!category.slugs.includes(categorySlug)) {
        continue;
      }

      const addCategoryIdToActiveFilters = (prevState) => [
        ...prevState,
        category.id,
      ];
      setActiveFilters(addCategoryIdToActiveFilters);
      break;
    }
  }, [isLoading, categorySlug, productCategories]);

  useEffect(() => {
    if (isLoading) {
      return () => {};
    }

    const filteredProductsList = productsList.results.filter((productItem) => {
      if (activeFilters.length === 0) {
        return true;
      }

      const { id } = productItem.data.category;
      return activeFilters.includes(id);
    });

    setProducts(filteredProductsList);
  }, [isLoading, productsList, activeFilters]);

  const handleToggleActive = useCallback(
    (categoryId) => {
      const filterActiveCategories = (prevState) => {
        if (prevState.includes(categoryId)) {
          return prevState.filter((id) => id !== categoryId);
        }

        return [...prevState, categoryId];
      };

      setActiveFilters(filterActiveCategories);
    },
    [setActiveFilters]
  );

  return (
    <div>
      <h1 className="text-center">This is the Product List Page</h1>

      <WrapperProductList>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Sidebar className={classNames({ loading: isLoading })}>
              <SidebarTitle>Categories</SidebarTitle>
              {productCategories.results.map(({ id, data }) => (
                <SidebarItem
                  key={id}
                  id={id}
                  name={data.name}
                  toggleActive={handleToggleActive}
                  active={activeFilters.includes(id)}
                />
              ))}
              <ClearFilters>
                {activeFilters.length > 0 && (
                  <Button onClick={() => setActiveFilters([])}>
                    X Clear filters
                  </Button>
                )}
              </ClearFilters>
            </Sidebar>

            <Content>
              <Products products={currentProducts} />
              <Pagination
                currentPage={currentPage}
                totalCount={products.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />

              {!currentProducts.length && (
                <div className="text-center">No Products found.</div>
              )}
            </Content>
          </>
        )}
      </WrapperProductList>
    </div>
  );
}
export default ProductList;
