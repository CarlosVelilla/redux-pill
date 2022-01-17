import types from "./types";

const saveFilters = (inputName, checked) => ({
  type: types.$FILTERS__SET_FILTERS,
  payload: {[inputName]: checked}
});

export default saveFilters;
