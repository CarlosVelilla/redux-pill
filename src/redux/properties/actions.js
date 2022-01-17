import getPropertiesAsync from "../../services/properties"
import store from "../store"

import {
  $PROPERTIES__SET_PROPERTIES
} from "./types"

export const setProperties = (properties) => ({
  type: $PROPERTIES__SET_PROPERTIES,
  payload: properties
})

export const getProperties = () => {
  return async (dispatch) => {
    const inputSearch = store.getState().inputSearch
    // TODO VALORAR ALTERNATIVA -> RECUPERAR ESTADO DE LA LLAMADA INICIAL DEL SEARCH INPUT COMO PARÁMETRO
    const properties = await getPropertiesAsync(inputSearch)
    dispatch(setProperties(properties))
  }
}