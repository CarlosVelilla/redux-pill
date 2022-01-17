import types from "./types";
import getPropertiesAsync from "../../utils/api";
import store from "../store";

const setProperties = (properties) => ({
  type: types.$PROPERTIES__SET_PROPERTIES,
  payload: properties,
});

export const getProperties = () => async (dispatch) => {
  const searchInput = store.getState().inputSearch;
  const properties = await getPropertiesAsync(searchInput);
  dispatch(setProperties(properties));
};

export default setProperties;
