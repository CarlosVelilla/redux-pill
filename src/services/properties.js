import axios from "axios"

const getPropertiesAsync = async (inputSearch) => {
  let searchField

  if (Number.isNaN(parseInt(inputSearch))) {
    // console.log("I'm a string");
    searchField = inputSearch.trim().replaceAll(" ", "%20")
  } else {
    // console.log("I'm a number");
    searchField = parseInt(inputSearch)
  }

  const field = (typeof searchField === "number") ? `zip=${searchField}` : `city=${searchField}`
  const properties = await axios.get(`http://localhost:3001/properties?${field}`)
  return properties.data
}

export default getPropertiesAsync;