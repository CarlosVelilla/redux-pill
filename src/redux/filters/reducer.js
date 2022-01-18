import types from "./types";
import initialState from "../initialState";
import { postLocalStorage } from "../../utils/localStorage";

const filtersReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    case types.FILTERS__SET_BOOLEAN_FILTERS:
      if (Object.values(action.payload)[0] === false) {
        const key = Object.keys(action.payload)[0]
        delete state[key]
        postLocalStorage("filters", state)
        return state
      }
      postLocalStorage("filters", { ...state, ...action.payload })
      return { ...state, ...action.payload };
    case types.FILTERS__SET_NOTBOOLEAN_FILTERS:
      postLocalStorage("filters", { ...state, ...action.payload })
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default filtersReducer;
