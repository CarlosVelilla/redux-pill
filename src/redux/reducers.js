import { combineReducers } from "redux";
import inputSearchReducer from "./searchInput/reducer";
import propertiesReducer from "./properties/reducer";
import filtersReducer from "./filters/reducer"

const reducers = combineReducers({
  inputSearch: inputSearchReducer,
  properties: propertiesReducer,
  filters: filtersReducer,
});

export default reducers;
