import React from 'react';
import Break from '../Break/Break';
import Details from '../Details/Details';
import Profile from '../Profile/Profile';
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Profile></Profile>
            <Details></Details>
            <Break></Break>
        </div>
    );
};

export default Sidebar;