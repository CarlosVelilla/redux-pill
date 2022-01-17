import types from "./types";
import initialState from "../initialState";

const propertiesReducer = (state = initialState.properties, action) => {
  switch (action.type) {
    case types.$PROPERTIES__SET_PROPERTIES:
      return action.payload;
    default:
      return state;
  }
};

export default propertiesReducer;
