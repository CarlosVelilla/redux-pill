import Form from 'react-bootstrap/Form'
import { useSelector, useDispatch } from 'react-redux';

import { saveFilters, saveFiltersNotBoolean } from '../../redux/filters/actions';
import { getProperties } from '../../redux/properties/actions';
import { debounce } from '../../utils/debounce';
import { getLocalStorage } from '../../utils/localStorage';

function Filters() {
  const searchInput = useSelector(state => state.inputSearch)
  const dispatch = useDispatch()
  
  const handleChange = (event) => {
    if (event.target.dataset.type === "boolean") dispatch(saveFilters(event.target.name, event.target.checked))
    if (event.target.dataset.type === "notboolean") dispatch(saveFiltersNotBoolean(event.target.name, event.target.value))
    let filters = getLocalStorage("filters")
    const debounceFnc = debounce(function () {
      dispatch(getProperties(searchInput, filters))
    }, 1000)
    debounceFnc()
  }

  return (
    <Form onSubmit={() => {console.log("You are searching")}}>
      
      <Form.Group id="homeType">
        <Form.Check
          inline
          label="Flat/Apartment"
          name="type"
          value="flat/apartment"
          onChange={handleChange}
          data-type='notboolean'
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
          data-type='boolean'
        />
      </Form.Group>

    </Form>
  )
}

export default Filters
