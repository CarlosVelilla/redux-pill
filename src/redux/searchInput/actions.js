import {
  $INPUT_SEARCH__SAVE_INPUT_SEARCH
} from "./types"

export const saveInputSearch = (itemToSearch) => ({
  type: $INPUT_SEARCH__SAVE_INPUT_SEARCH,
  payload: itemToSearch
})