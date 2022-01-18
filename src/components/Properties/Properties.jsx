import { useSelector } from "react-redux"
import { v4 as uuid } from 'uuid';

import PropertyCard from "../PropertyCard/PropertyCard"

function Properties() {
  const properties = useSelector(state => state.properties)
  
  return (
    <div>
      {properties.map(property =>
        <PropertyCard
          key={uuid()}
          id={property.id}
          street={property.street}
          number={property.number}
          city={property.city}
          province={property.province}
          country={property.country}
          status={property.status}
          type={property.type}
          description={property.description}
          contact_mail={property.contact_mail}
          contact_phone={property.contact_phone}
          condition={property.condition}
          room={property.room}
          bath={property.bath}
          size={property.size}
          price={property.price}
          pet={property.pet}
          garden={property.garden}
          air_conditioning={property.air_conditioning}
          swimming_pool={property.swimming_pool}
          terrace={property.terrace}
          publication_date={property.publication_date}
          zip={property.zip}
        />
      )}
    </div>
  )
}

export default Properties
