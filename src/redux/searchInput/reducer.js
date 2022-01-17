import types from "./types";
import initialState from "../initialState";

const reducer = (state = initialState.searchInput, action) => {
    switch (action.type) {
        case types.$INPUT_SEARCH__SAVE_INPUT_SEARCH:
            return action.payload
        default:
            return state;
    }
};

export default reducer;

