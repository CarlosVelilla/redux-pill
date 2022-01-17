import { combineReducers } from "redux";
import inputSearchReducer from "./searchInput/reducer";

const reducers = combineReducers({ inputSearch: inputSearchReducer });

export default reducers;