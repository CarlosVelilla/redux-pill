import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { saveInputSearch } from "../../redux/searchInput/actions"
import { getProperties } from "../../redux/properties/actions"

import Form from 'react-bootstrap/Form'

function SearchInput({ isHome }) {
  const inputRef = useRef()
  const dispatch = useDispatch()
  const location = useNavigate()

  const inputSearch = useSelector(state => state.inputSearch)

  useEffect(() => {
    inputRef.current.value = inputSearch !== "" ? inputSearch : ""
  }, [inputSearch])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(saveInputSearch(inputRef.current.value))
    dispatch(getProperties())

    if (isHome) {
      location("/dashboard")
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group id="search">
        <Form.Control
          type="search"
          ref={inputRef}
          required
          placeholder="Search by city or zip code"
        ></Form.Control>
      </Form.Group>
    </Form>
  )
}

export default SearchInput
