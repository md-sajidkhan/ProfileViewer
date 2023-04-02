import './ProfileDetails.css'
import { useOutletContext } from "react-router-dom";
import ChatBox from "./ChatBox";
import UserPersonalDetails from "./UserPersonalDetails";
import UserCompanyDetails from "./UserCompanyDetails";
import UserLocationDetails from "./UserLocationDetails";
import ProfileHeader from "./ProfileHeader";
import FloatingBox from "./FloatingBox";

function ProfileDetails({}) {
  
  const [id, name, img, username, email, phone, website, companyName, catchPhrase, bs, city, street, suits, zipcode, lat, lng, otherProfiles, randomProfile1, randomProfile2,  showBox , handleBoxClick] = useOutletContext();

  return (
    <>
      
      <ProfileHeader handleBoxClick={handleBoxClick} img={img} name={name} />

      {showBox && <FloatingBox img={img} name={name} email={email} randomProfiles={[randomProfile1, randomProfile2]} />}

      <div className='profile-details'>
        <div className='user-details'>
          <UserPersonalDetails img={img} name={name} username={username} email={email} phone={phone} website={website}/>
          <UserCompanyDetails companyName={companyName} catchPhrase={catchPhrase} bs={bs} />
        </div>
        <UserLocationDetails street={street} suits={suits} city={city} zipcode={zipcode} lat={lat} lng={lng} />
      </div >
      <ChatBox otherProfiles={otherProfiles} filteredProfiles={[{ id, name, img, email }]} />
    </>
  )
}

export default ProfileDetails;
