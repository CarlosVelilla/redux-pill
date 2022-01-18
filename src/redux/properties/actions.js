import types from "./types";
import getPropertiesAsync from "../../utils/api";

export const setProperties = (properties) => ({
  type: types.$PROPERTIES__SET_PROPERTIES,
  payload: properties,
});

export const getProperties = (searchInput, filters) => async (dispatch) => {
  const properties = await getPropertiesAsync(searchInput, filters);
  dispatch(setProperties(properties));
};