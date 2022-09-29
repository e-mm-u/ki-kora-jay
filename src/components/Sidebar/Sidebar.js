import React, { useState } from 'react';
import Break from '../Break/Break';
import Details from '../Details/Details';
import Profile from '../Profile/Profile';
import Selected from '../Selected/Selected';
import Toast from '../Toast/Toast';
import './Sidebar.css'

const Sidebar = (props) => {
    const [breakTime, setBreak] = useState(0);

    const addBreakTime = (time) => {
        setBreak(time);
        localStorage.setItem('break-time',time);
        
    }

    return (
        <div className='sidebar'>
            <Profile></Profile>
            <Details></Details>
            <hr />
            <Break breakFnc={addBreakTime}></Break>
            <Selected time={props.time} breakTime={breakTime}></Selected>
            <Toast></Toast>
        </div>
    );
};

export default Sidebar;