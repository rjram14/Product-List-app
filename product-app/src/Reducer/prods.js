import { TOGGLE_PROD, LOAD_PRODUCTS } from "../Action/actionTypes";

export default function (state = { products: [] }, action) {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      const prods = action.payload.data.data;
      return {
        ...state,
        products: prods,
        curProduct: prods[0],
      };
    }
    case TOGGLE_PROD: {
      const { id } = action.payload;
      const curPr = state.products.filter((prod) => prod.id == id);
      return {
        ...state,
        curProduct: curPr[0],
      };
    }
    default:
      return state;
  }
}
