import React from 'react';
import Details from '../Details/Details';
import Profile from '../Profile/Profile';
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Profile></Profile>
            <Details></Details>
        </div>
    );
};

export default Sidebar;