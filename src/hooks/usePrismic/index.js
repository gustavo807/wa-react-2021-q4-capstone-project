import { useCallback } from "react";
import { Lang } from "../../constants";

function usePrismic() {
  const at = useCallback((customType, ID) => {
    return `[[at(${customType}, ${JSON.stringify(ID)})]]`;
  }, []);

  const fulltext = useCallback((customType, searchTerm) => {
    return `[[fulltext(${customType}, "${searchTerm}")]]`;
  }, []);

  const createRequest = useCallback(
    (name, queries, pageSize = 20, page = 1) => {
      var queryParams = queries
        .map((query) => {
          return `&q=${escape(query)}`;
        })
        .join("");

      return {
        name: name,
        params: `${queryParams}&pageSize=${pageSize}&page=${page}&lang=${Lang}`,
      };
    },
    []
  );

  return { at, fulltext, createRequest };
}

export default usePrismic;
