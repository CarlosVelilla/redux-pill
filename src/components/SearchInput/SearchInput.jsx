import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import saveInputSearch from "../../redux/searchInput/actions";
import { getProperties } from "../../redux/properties/actions.js";

import Form from "react-bootstrap/Form";

function SearchInput({ isHome }) {
  const inputRef = useRef();
  const searchInput = useSelector((state) => state.inputSearch);
  const dispatch = useDispatch();

  const location = useNavigate();

  useEffect(() => {
    inputRef.current.value = searchInput !== "" ? searchInput : "";
  }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveInputSearch(inputRef.current.value));
    dispatch(getProperties());

    if (isHome) {
      location("/dashboard");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group id="search">
        <Form.Control
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
