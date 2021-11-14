import { screen, waitFor } from "@testing-library/react";
import renderWithRouterAndRedux from "../../../utils/renderWithRouterAndRedux";
import App from "../../../App";
import searchChairResults from "../../../mocks/en-us/search-chair-term.json";

const SEARCH_TERM = "chair";

describe("Search Results", () => {
  it("should render results for 'chair' search term", async () => {
    renderWithRouterAndRedux(<App />, { route: `/search?q=${SEARCH_TERM}` });

    const results = searchChairResults.results;

    await waitFor(() => {
      for (const result of results) {
        expect(screen.getByText(result.data.name)).toBeInTheDocument();
      }
    });
  });

  it("should render 'Not Records Found.' message when empty string is passed", async () => {
    renderWithRouterAndRedux(<App />, { route: `/search` });

    await waitFor(() => {
      expect(screen.getByText(/Not Records Found./i)).toBeInTheDocument();
    });
  });
});
