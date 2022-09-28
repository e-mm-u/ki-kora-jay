import React from 'react';
import './Header.css'
import logo from '../../images/logo.jpg'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo" />
            <h1>Ki kora jay?</h1>
        </div>
    );
};

export default Header;