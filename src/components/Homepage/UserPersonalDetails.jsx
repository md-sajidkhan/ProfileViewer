import React from 'react'

function UserPersonalDetails({ img, name, username, email, phone, website }) {
  return (
    <div className='user-personaldetails'>
      <img src={img} alt='Profile Image' className='profile-image' />
      <h3 className='profile-name'>{name}</h3>
      <h3>Username: <span>{username}</span></h3>
      <h3>e-mail: <span>{email}</span></h3>
      <h3>Phone: <span>{phone}</span></h3>
      <h3>Website: <span>{website}</span></h3>
    </div>

  )
}

export default UserPersonalDetails