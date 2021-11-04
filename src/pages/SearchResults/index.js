import { useMemo, useState } from "react";
import { usePrismic, useQuery, useRequests } from "../../hooks";
import { Loader, Products } from "../../components";
import { PaginationContainer, ButtonPagination } from "./styled";
import classnames from "classnames";

function SearchResults() {
  const { at, fulltext, createRequest } = usePrismic();
  const query = useQuery();
  const searchTerm = query.get("q");

  const [currPage, setCurrPage] = useState(1);

  const requests = useMemo(
    () => [
      createRequest(
        "searchResults",
        [at("document.type", "product"), fulltext("document", searchTerm)],
        20,
        currPage
      ),
    ],
    [at, fulltext, createRequest, searchTerm, currPage]
  );

  const {
    data: { searchResults },
    isLoading,
  } = useRequests(requests);

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2 className="text-center">Results for Search Term: {searchTerm}</h2>
          {searchResults?.results_size === 0 ? (
            <div>Not Records Found.</div>
          ) : (
            <>
              <Products products={searchResults.results} />

              {searchResults.total_pages > 1 && (
                <PaginationContainer>
                  <ButtonPagination
                    className={classnames({
                      disabled: searchResults.page === 1,
                    })}
                    onClick={() => {
                      setCurrPage((prevState) => prevState - 1);
                    }}
                  >
                    &#8592; Prev
                  </ButtonPagination>
                  <ButtonPagination
                    className={classnames({
                      disabled:
                        searchResults.page === searchResults.total_pages,
                    })}
                    onClick={() => {
                      setCurrPage((prevState) => prevState + 1);
                    }}
                  >
                    Next &#8594;
                  </ButtonPagination>
                </PaginationContainer>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default SearchResults;
