import React from 'react'
import { Link } from 'react-router-dom'

function FloatingBox({ img, name, email, randomProfiles }) {
    return (
        <div className="floating-box">
            <div className='box-user'>
                <img src={img} alt="Picture" className='box-pic' />
                <h4 className='box-name'>{name}</h4>
                <p className='box-email'>{email}</p>
            </div>
            <div >
                {
                    randomProfiles.map(random => (
                        <div className='random-user' key={random.id}>
                            <img src={random.profilepicture} alt='random-user' className='random-userImage' />
                            <h4 className='random-userName'>{random.name}</h4>
                        </div>
                    ))
                }
            </div>
            <div className="signout-btn">
                <Link to='/'>
                <button className='signout'>Signout</button>
                </Link>
            </div>
        </div>
    )
}

export default FloatingBox