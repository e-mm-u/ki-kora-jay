import React from 'react';
import './Main.css'
import Sidebar from '../Sidebar/Sidebar';
import Activities from '../Activities/Activities';

const Main = () => {
    return (
        <div className='main'>
            <Activities></Activities>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Main;