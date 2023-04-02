import React from 'react'
import './ProfileHeader.css';

function ProfileHeader({ handleBoxClick, img, name }) {
  return (
    <div className='header'>
        <div className='header-title'>Profile</div>
        <div className='header-profile' onClick={handleBoxClick} >
          <img src={img} alt="Picture" className='header-pic' />
          <h4 className='header-name'>{name}</h4>
        </div>
      </div>
  )
}

export default ProfileHeader