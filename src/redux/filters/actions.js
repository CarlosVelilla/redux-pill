import types from "./types";

const saveFilters = (inputName, checked) => ({
  type: types.FILTERS__SET_BOOLEAN_FILTERS,
  payload: {[inputName]: checked}
});

export default saveFilters;

