import types from "./types";
import initialState from "../initialState";

const filtersReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    case types.$FILTERS__SET_FILTERS:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default filtersReducer;
