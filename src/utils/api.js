import axios from "axios";

const getPropertiesAsync = async (searchInput) =>{
    let searchField;

    if(Number.isNaN(parseInt(searchInput))){
        searchField = searchInput.trim().replaceAll(" ", "%20")
    } else{
        searchField = parseInt(searchInput)
    }

    const field = (typeof searchField === "number") ? `zip=${searchField}` : `city=${searchField}`
    const data = await axios.get(`http://localhost:4000/properties?${field}`);
    return data.data;
};

export default getPropertiesAsync;