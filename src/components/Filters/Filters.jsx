import { useRef } from 'react'
import Form from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux';

import saveFilters from '../../redux/filters/actions';

function Filters() {
  const testRef = useRef()
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(saveFilters(event.target.name, event.target.checked))
  }

  return (
    <Form onSubmit={() => {console.log("You are searching")}}>
      
      <Form.Group id="homeType">
        <Form.Check
          inline
          label="Flat/Apartment"
          name="homeType"
          ref={testRef}
        />
        <Form.Check
          inline
          label="Duplex"
          name="homeType"
        />
        <Form.Check
          inline
          label="House"
          name="homeType"
        />
        <Form.Check
          inline
          label="Penthouse"
          name="homeType"
        />
      </Form.Group>
      
      <Form.Group id="bedrooms">
        <Form.Control
          type="number"
          // ref={inputRef}
          placeholder="0"
        ></Form.Control>
      </Form.Group>

      <Form.Group id="maxPrice">
        <Form.Control
          type="range"
        ></Form.Control>
      </Form.Group>

      <Form.Group id="booleans">
        <Form.Check
          inline
          label="Garden"
          name="garden"
          onChange={(event) => handleChange(event)}
        />
        <Form.Check
          inline
          label="Pet"
          name="pet"
          onChange={(event) => handleChange(event)}
        />
      </Form.Group>

    </Form>
  )
}

export default Filters
