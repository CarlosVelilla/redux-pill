import React, { useEffect, useState } from 'react'

import { getLocalStorage } from '../../utils/localStorage/localStorage'

import CardProperty from '../CardProperty/CardProperty'

function Properties({ reloadProperties }) {
  const [properties, setProperties] = useState()

  useEffect(() => {
    setProperties(getLocalStorage())
  }, [reloadProperties])

  return (
    <ul>
      {properties?.map((property, index) => (
        <CardProperty id={property.id} city={property.city} key={index}/>
      ))}
    </ul>
  )
}

export default Properties
