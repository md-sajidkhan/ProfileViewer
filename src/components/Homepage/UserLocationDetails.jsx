import React from 'react'

function UserLocationDetails({ street, suits, city, zipcode, lat, lng}) {
  return (
    <div className='user-location'>
          <h3>Address</h3>
          <h3>Street: <span>{street}</span></h3>
          <h3>Suite: <span>{suits}</span></h3>
          <h3>City: <span>{city}</span></h3>
          <h3>Zipcode: <span>{zipcode}</span></h3>
          <iframe className="iframeId" src={`https://maps.google.com/maps?q=${lat},${lng}&hl=en;&z=3&output=embed`} height="300px" width="600px"></iframe>
          <h6>Lat : {lat} Long: {lng}</h6>
        </div>
  )
}

export default UserLocationDetails