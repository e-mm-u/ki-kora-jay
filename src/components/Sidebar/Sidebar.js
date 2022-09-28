import React from 'react';
import Break from '../Break/Break';
import Details from '../Details/Details';
import Profile from '../Profile/Profile';
import Selected from '../Selected/Selected';
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Profile></Profile>
            <Details></Details>
            <Break></Break>
            <Selected></Selected>
        </div>
    );
};

export default Sidebar;