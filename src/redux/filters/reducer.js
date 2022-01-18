import types from "./types";
import initialState from "../initialState";

const filtersReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    case types.FILTERS__SET_BOOLEAN_FILTERS:
      if (Object.values(action.payload)[0] === false) {
        const key = Object.keys(action.payload)[0]
        delete state[key]
        return state
      }
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default filtersReducer;
