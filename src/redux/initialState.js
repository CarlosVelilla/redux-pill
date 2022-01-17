import { getLocalStorage } from "../utils/localStorage";



const initialState = {
    searchInput: getLocalStorage("searchInput") ? getLocalStorage("searchInput") : "",
    properties: getLocalStorage("properties") ? getLocalStorage("properties") : [],
};

export default initialState;