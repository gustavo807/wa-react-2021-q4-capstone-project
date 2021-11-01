import { useState, useEffect, useContext } from "react";
import { API_BASE_URL } from "../../constants";
import useLatestAPI from "../useLatestAPI";
import { LangContext } from "../../context";

const initial_state = {
  data: {},
  isLoading: true,
};

function useRequests(requests = []) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [sections, setSections] = useState(() => initial_state);
  const { lang } = useContext(LangContext);

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    let isMounted = true;
    const controllerList = [];

    async function getRequests() {
      const promises = requests.map(({ name, params }) => {
        let controller = new AbortController();
        controllerList.push(controller);

        var searchParams = Object.entries(params)
          .map(([key, value]) => {
            if (Array.isArray(value)) {
              return value.map((v) => `&${key}=${escape(v)}`).join("");
            }

            return `&${key}=${escape(value)}`;
          })
          .join("");

        return fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}${searchParams}&lang=${lang}`,
          {
            signal: controller.signal,
          }
        )
          .then((res) => res.json())
          .then((data) => ({ [name]: data }));
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
  }, [apiRef, isApiMetadataLoading, requests, lang]);

  return sections;
}

export default useRequests;
