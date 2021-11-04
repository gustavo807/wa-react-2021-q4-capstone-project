import { useState, useEffect } from "react";
import { API_BASE_URL } from "../../constants";
import useLatestAPI from "../useLatestAPI";

const initial_state = {
  data: {},
  isLoading: true,
};

function useRequests(requests = []) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [sections, setSections] = useState(() => initial_state);

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    let isMounted = true;
    const controllerList = [];

    async function getRequests() {
      const promises = requests.map((promise) => {
        let controller = new AbortController();
        controllerList.push(controller);

        return fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}${promise.params}`,
          {
            signal: controller.signal,
          }
        )
          .then((res) => res.json())
          .then((data) => ({ [promise.name]: data }));
      });

      try {
        const responseList = await Promise.all(promises);

        const newState = responseList.reduce(
          (acc, curr) => ({ ...acc, ...curr }),
          {}
        );

        if (isMounted) {
          setSections({ data: newState, isLoading: false });
        }
      } catch (err) {
        if (isMounted) {
          setSections({ ...initial_state, isLoading: false });
        }
        console.error(err);
      }
    }

    getRequests();

    return () => {
      isMounted = false;
      controllerList.forEach((control) => {
        control.abort();
      });
    };
  }, [apiRef, isApiMetadataLoading, requests]);

  return sections;
}

export default useRequests;
