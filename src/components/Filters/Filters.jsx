import React from 'react'

import Form from 'react-bootstrap/Form'

function Filters() {
  return (
    <Form onSubmit={() => {console.log("You are searching")}}>
      
      <Form.Group id="homeType">
        <Form.Check
          inline
          label="Flat/Apartment"
          name="homeType"
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

    </Form>
  )
}

export default Filters
