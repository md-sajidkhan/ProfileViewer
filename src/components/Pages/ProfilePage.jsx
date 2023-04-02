import React, { useState } from 'react'
import './ProfilePage.css'
import { Outlet, useParams } from 'react-router-dom'
import Navbar from '../Homepage/Navbar';



function ProfilePage({ profiles }) {

    let { id } = useParams();

    const [showBox, setShowBox] = useState(false);
    //   const [profiles, id] = useOutletContext();

    const { name, profilepicture: img, username, email, phone, website, company, address } = profiles.find(profile => profile.id === parseInt(id)) || {};
    const { name: companyName, bs, catchPhrase } = company || {};
    const { city, street, suite: suits, zipcode, geo } = address || {};
    const { lat, lng } = geo || {};

    const otherProfiles = profiles.filter(profile => profile.id !== parseInt(id));
    const [randomProfile1, randomProfile2] = [otherProfiles[Math.floor(Math.random() * otherProfiles.length)], otherProfiles[Math.floor(Math.random() * otherProfiles.length)]];

    const handleBoxClick = () => setShowBox(!showBox);

    return (
        <div className='profile-page'>
            
            <Navbar>
                <Outlet context={[
                    id, 
                    name, 
                    img, 
                    username, 
                    email, 
                    phone, 
                    website, 
                    companyName, 
                    catchPhrase, 
                    bs, 
                    city, 
                    street, 
                    suits, 
                    zipcode, 
                    lat, 
                    lng,
                    otherProfiles,
                    randomProfile1,
                    randomProfile2, 
                    showBox ,
                    handleBoxClick
                    ]} />
            </Navbar>
        </div>
    )
}

export default ProfilePage