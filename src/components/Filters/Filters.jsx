import React, { useState } from "react";

import { postLocalStorage } from "../../utils/localStorage/localStorage";

import Form from "react-bootstrap/Form";

function Filters({ reloadProperties, setReloadProperties }) {
  const [houseType, sethouseType] = useState("");
  const [bedrooms, setBedrooms] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const handleHouseType = (e) => {
    sethouseType(e.target.value);
  };

  const handleBedrooms = (e) => {
    setBedrooms(e.target.value);
  };

  const handleMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const value = {
      houseType,
      bedrooms,
      maxPrice,
    };

    const fetchData = async () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        `http://localhost:4000/properties?type=${value.houseType}&room=${value.bedrooms}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          postLocalStorage(result)
          setReloadProperties(!reloadProperties)
        })
        .catch((error) => console.log("error", error))
    };

    fetchData();
  }

  return (
    <>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group id="homeType">
          <select value={houseType} onChange={handleHouseType}>
            <option value="">House Type</option>
            <option value="flat/apartment">Flat/Apartment</option>
            <option value="house">House</option>
            <option value="duplex">Duplex</option>
            <option value="penthouse">Penthouse</option>
          </select>
        </Form.Group>
        <Form.Group id="bedrooms">
          <Form.Control
            type="number"
            // ref={inputRef}
            value={bedrooms}
            onChange={handleBedrooms}
            placeholder="0"
          ></Form.Control>
        </Form.Group>

        <Form.Group id="maxPrice">
          <Form.Control
            type="range"
            value={maxPrice}
            onChange={handleMaxPrice}
            min="0"
            max="1000000"
          ></Form.Control>
        </Form.Group>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
}

export default Filters;
