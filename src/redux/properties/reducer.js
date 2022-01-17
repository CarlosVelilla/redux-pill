import {
  $PROPERTIES__SET_PROPERTIES
} from "./types"

import initialState from "./state"

const reducer = (state = initialState, action) => {
  if (action.type === $PROPERTIES__SET_PROPERTIES) return action.payload
  return state
}

export default reducer