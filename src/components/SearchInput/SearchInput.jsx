import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import saveInputSearch from "../../redux/searchInput/actions";
import { getProperties } from "../../redux/properties/actions.js";
import { deleteLocalStorage, postLocalStorage } from "../../utils/localStorage";

import Form from "react-bootstrap/Form";

function SearchInput({ isHome }) {
  const inputRef = useRef();
  const searchInput = useSelector((state) => state.inputSearch);
  const dispatch = useDispatch();

  const location = useNavigate();

  useEffect(() => {
    inputRef.current.value = searchInput !== "" ? searchInput : "";
  }, [searchInput]);

  const resetLocalStorage = () =>{
    if (inputRef.current.value === ""){
      deleteLocalStorage("searchInput")
      deleteLocalStorage("properties")
      deleteLocalStorage("filters")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveInputSearch(inputRef.current.value));
    dispatch(getProperties(inputRef.current.value));

    postLocalStorage("searchInput", inputRef.current.value)
    if (isHome) {
      location("/dashboard");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group id="search">
        <Form.Control
          onChange={resetLocalStorage}
          type="search"
          ref={inputRef}
          required
          placeholder="Search here for your next home"
        ></Form.Control>
      </Form.Group>
    </Form>
  );
}

export default SearchInput;
