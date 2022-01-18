import types from "./types";

export const saveFilters = (inputName, checked) => ({
  type: types.FILTERS__SET_BOOLEAN_FILTERS,
  payload: {[inputName]: checked}
});

export const saveFiltersNotBoolean = (inputName, value) => ({
  type: types.FILTERS__SET_NOTBOOLEAN_FILTERS,
  payload: {[inputName]: value}
})