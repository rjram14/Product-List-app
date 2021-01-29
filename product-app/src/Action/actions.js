import { LOAD_PRODUCTS, GET_SINGLE_PRODUCT, TOGGLE_PROD } from "./actionTypes";
import axios from "axios";

export const loadProducts = () => {
  return (dispatch) => {
    // Return promise with success and failure actions
    return axios
      .get("https://gorest.co.in/public-api/products")
      .then((result) => dispatch({ type: LOAD_PRODUCTS, payload: result }));
  };
};

export const getSingleProduct = (id) => ({
  type: GET_SINGLE_PRODUCT,
  payload: { id },
});

export const toggleProd = (id) => ({
  type: TOGGLE_PROD,
  payload: { id },
});
