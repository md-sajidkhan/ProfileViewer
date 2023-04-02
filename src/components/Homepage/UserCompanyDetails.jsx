import React from 'react'

function UserCompanyDetails({ companyName, catchPhrase, bs }) {
    return (
        <div className='user-companydetails'>
            <h3 className='profile-name'>Company</h3>
            <h3>Name: <span>{companyName}</span></h3>
            <h3>catchphrase: <span>{catchPhrase}</span></h3>
            <h3>bs: <span>{bs}</span></h3>
        </div>
    )
}

export default UserCompanyDetails