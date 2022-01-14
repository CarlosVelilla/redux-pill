import React from 'react'

import { getLocalStorage } from '../../utils/localStorage/localStorage'

import CardProperty from '../CardProperty/CardProperty'

function Properties() {
  return (
    <ul>
      {getLocalStorage().map((property, index)=>{ <CardProperty id={property.id} key={index}/>})}
    </ul>
  )
}

export default Properties
