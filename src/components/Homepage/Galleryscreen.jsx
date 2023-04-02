import React from 'react'
import { useOutletContext } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import FloatingBox from './FloatingBox';

function Galleryscreen() {
  const [id, name, img, username, email, phone, website, companyName, catchPhrase, bs, city, street, suits, zipcode, lat, lng, otherProfiles, randomProfile1, randomProfile2,  showBox , handleBoxClick] = useOutletContext();

  return (
    <>
    <ProfileHeader handleBoxClick={handleBoxClick} img={img} name={name} />
    {showBox && <FloatingBox img={img} name={name} email={email} randomProfiles={[randomProfile1, randomProfile2]} />}
    <div  className='other-screens'>
      <h1>Coming Soon</h1>
    </div>
    </>
  )
}

export default Galleryscreen