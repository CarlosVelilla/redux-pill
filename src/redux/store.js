import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'

import combinedReducers from "./reducers";

const thunkApplied = applyMiddleware(thunk)

const store = createStore(
  combinedReducers,
  composeWithDevTools(thunkApplied)
)

export default store;