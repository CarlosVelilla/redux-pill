function PropertyCard({ id, street, number, city, province, country, status, type, description, contact_mail, contact_phone, condition, room, bath, size, price, pet, garden, air_conditioning, swimming_pool, terrace, publication_date, zip }) {
  return (
    <div>
      <img src={`https://picsum.photos/300/150?random${id}`} alt="Property pic" />
      <div>
        <p>{number} {street}</p>
        <p>{city}, {province}</p>
      </div>
      <p>{price}</p>
      <p>Room {room},</p>
      <p>Bath {bath},</p>
      <p>Size {size}m²</p>
      <p>Sold</p>
      <p>Remove</p>
      {/* {id}
      {street}
      {number}
      {city}
      {province}
      {country}
      {status}
      {type}
      {description}
      {contact_mail}
      {contact_phone}
      {condition}
      {room}
      {bath}
      {size}
      {price}
      {pet}
      {garden}
      {air_conditioning}
      {swimming_pool}
      {terrace}
      {publication_date}
      {zip} */}
    </div>
  )
}

export default PropertyCard
