import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";

import reducers from "./reducers";

const thunkApplied = applyMiddleware(thunk);

const store = createStore(reducers, composeWithDevTools(thunkApplied));

store.subscribe(()=>{
    console.log(store);
});

export default store;

