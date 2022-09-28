import React from 'react';
import './Main.css'
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const Main = () => {
    return (
        <div className='main'>
           <Header className='header'></Header>
           <Sidebar className='sidebar'></Sidebar>
        </div>
    );
};

export default Main;