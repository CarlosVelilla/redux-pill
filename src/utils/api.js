import axios from "axios";
import { postLocalStorage } from "./localStorage";

const getPropertiesAsync = async (searchInput, filters) => {
  let searchField;

  if (Number.isNaN(parseInt(searchInput))) {
    searchField = searchInput.trim().replaceAll(" ", "%20")
  } else {
    searchField = parseInt(searchInput)
  }

  const field = (typeof searchField === "number") ? `zip=${searchField}` : `city=${searchField}`

  let filterURL = ""

  if (filters !== undefined) Object.entries(filters).forEach(([key, value]) => {
    console.log(filters[value]);
    if(key.includes(",")){
      console.log("Hi");
      filters[key].forEach(k=>(console.log(k)))
    }
    filterURL += `&${key}=${value}`
  })

  console.log(filterURL);

  const data = await axios.get(`http://localhost:4000/properties?${field}&${filterURL}`);

  postLocalStorage("properties", data.data)
  return data.data;
};

export const getUser = async () => {
  const user = await axios.get(`http://localhost:4000/users?id=1`)
  return user.data
}

export default getPropertiesAsync;