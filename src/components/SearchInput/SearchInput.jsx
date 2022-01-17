import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import saveInputSearch from '../../redux/searchInput/actions';

import Form from 'react-bootstrap/Form'

function SearchInput({isHome}) {
  const inputRef = useRef()
  const searchInput = useSelector(state => state.searchInput)
  const dispatch = useDispatch()

  const location = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(saveInputSearch(inputRef.current.value))
    
    
    
    
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
          placeholder="Search here for your next home"
        ></Form.Control>
      </Form.Group>
    </Form>
  )
}

export default SearchInput
