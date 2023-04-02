import React from 'react'
import { Link } from 'react-router-dom';
import './Landingpage.css'

function Landingpage({ profiles }) {


  return (
    <div className='landing-page'>
      {/* Background-image */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='background'>
        <path fill="white" fillOpacity="1" d="M0,32L34.3,69.3C68.6,107,137,181,206,176C274.3,171,343,85,411,74.7C480,64,549,128,617,149.3C685.7,171,754,149,823,122.7C891.4,96,960,64,1029,69.3C1097.1,75,1166,117,1234,144C1302.9,171,1371,181,1406,186.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
        </path>
      </svg>


      {/* Users List Box */}

      <div className='landing-page-box'>
        <h1 className='lp-heading'>Select an Account</h1>
        <div className='profile-list'>
          {
            profiles.map(profile => (

              <Link to={`/profile/${profile.id}`} key={profile.id} className='lp-image-name'>
                <img src={profile.profilepicture} className='lp-image' alt="picture" />
                <p key={profile.id} className='lp-name'>{profile.name}</p>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Landingpage