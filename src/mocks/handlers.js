import { rest } from "msw";
import { API_BASE_URL } from "../constants";
import api from "./en-us/api.json";
import featuredBanners from "./en-us/featured-banners.json";
import productCategories from "./en-us/product-categories.json";
import featuredProducts from "./en-us/featured-products.json";
import products from "./en-us/products.json";
import product from "./en-us/product.json";
import searchEmptyState from "./en-us/search-empty-state.json";
import searchChairTerm from "./en-us/search-chair-term.json";

export const handlers = [
  rest.get(API_BASE_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(api));
  }),
  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) => {
    const query = req.url.searchParams;

    const queries = query.getAll("q");

    if (queries.length === 0) {
      return res(ctx.status(200), ctx.json({}));
    }

    const q1 = queries[0];
    const q2 = queries[1];

    //Search Results 'chair' term
    if (
      q1 === '[[at(document.type, "product")]]' &&
      q2 === '[[fulltext(document, "chair")]]'
    ) {
      return res(ctx.status(200), ctx.json(searchChairTerm));
    }

    //Search Results Empty State
    if (
      q1 === '[[at(document.type, "product")]]' &&
      q2 === '[[fulltext(document, "null")]]'
    ) {
      return res(ctx.status(200), ctx.json(searchEmptyState));
    }

    //Featured Products
    if (
      q1 === '[[at(document.type, "product")]]' &&
      q2 === '[[at(document.tags, ["Featured"])]]'
    ) {
      return res(ctx.status(200), ctx.json(featuredProducts));
    }

    //Featured Banners
    if (q1 === '[[at(document.type, "banner")]]') {
      return res(ctx.status(200), ctx.json(featuredBanners));
    }

    //Product Categories
    if (q1 === '[[at(document.type, "category")]]') {
      return res(ctx.status(200), ctx.json(productCategories));
    }

    //Product List
    if (q1 === '[[at(document.type, "product")]]') {
      return res(ctx.status(200), ctx.json(products));
    }

    //Product Detail
    if (q1 === '[[at(document.id, "YWMHuxIAAC8Azxdw")]]') {
      return res(ctx.status(200), ctx.json(product));
    }

    return res(ctx.status(200), ctx.json({}));
  }),
];
