import types from "./types";
import initialState from "../initialState";
import { postLocalStorage } from "../../utils/localStorage";

const filtersReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    case types.FILTERS__SET_BOOLEAN_FILTERS:
      if (Object.values(action.payload)[0] === false) {
        const key = Object.keys(action.payload)[0];
        delete state[key];
        postLocalStorage("filters", state);
        return state;
      }
      postLocalStorage("filters", { ...state, ...action.payload });
      return { ...state, ...action.payload };
    case types.FILTERS__SET_NOTBOOLEAN_FILTERS:
      // if (Object.entries(action.payload).forEach(([key, value]) => state[key].includes(value))) {
      //   delete Object.entries(action.payload).forEach(([key, value]) => state[key].includes(value))
      //   return { ...state }
      // }
      // Object.entries(action.payload).forEach( ([key, value]) => console.log(state[key].includes(value)))

      const [key, value] = Object.entries(action.payload)[0];

      if (state.hasOwnProperty(key)) {
        state[key].push(value[0]);
        postLocalStorage("filters", { ...state });
        return { ...state };
      }

      postLocalStorage("filters", { ...state, ...action.payload });
      return { ...state, ...action.payload };
    case types.FILTERS__REMOVE_NOTBOOLEAN_FILTERS:
      const [a, b] = Object.entries(action.payload)[0];
      postLocalStorage("filters", state[a].filter((item) =>(item !== b[0])));
      return state[a].filter((item) =>(item !== b[0]));
    default:
      return state;
  }
};

export default filtersReducer;
