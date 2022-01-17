import {
  $INPUT_SEARCH__SAVE_INPUT_SEARCH
} from "./types"

import initialState from "./state"

const reducer = (state = initialState, action) => {
  if (action.type === $INPUT_SEARCH__SAVE_INPUT_SEARCH) return action.payload
  return state
}

export default reducer