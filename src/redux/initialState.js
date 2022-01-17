import { getLocalStorage } from "../utils/localStorage";

const filterState = {
  pet: false,
  garden: false,
  air_conditioning: false,
  swimming_pool: false,
  terrace: false,
}

const initialState = {
  searchInput: getLocalStorage("searchInput") ? getLocalStorage("searchInput") : "",
  properties: getLocalStorage("properties") ? getLocalStorage("properties") : [],
  filters: getLocalStorage("filters") ? getLocalStorage("filters") : filterState,
};


export default initialState;