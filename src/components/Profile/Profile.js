import React from 'react';
import './Profile.css'
import photo from '../../images/profile2.jpg'

const Profile = () => {
    return (
        <div className='profile'>
            <img src={photo} alt="" />
            <div className='profile-details'>
                <p><b>Lila Boti</b></p>
                <small>Istanbul, Turkey</small>
            </div>
            
        </div>
    );
};

export default Profile;