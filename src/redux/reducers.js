import { combineReducers } from "redux";
import inputSearchReducer from "./searchInput/reducer"
import propertiesReducer from "./properties/reducer"

const reducers = combineReducers({
  inputSearch: inputSearchReducer,
  properties: propertiesReducer
})

export default reducers