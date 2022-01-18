import { getLocalStorage } from "../utils/localStorage";

const initialState = {
  searchInput: getLocalStorage("searchInput") ? getLocalStorage("searchInput") : "",
  properties: getLocalStorage("properties") ? getLocalStorage("properties") : [],
  filters: getLocalStorage("filters") ? getLocalStorage("filters") : {},
};


export default initialState;