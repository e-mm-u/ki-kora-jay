import React from 'react';
import './Details.css'

const Details = () => {
    return (
        <div className='details'>
            <div className='col'>
                <div className='first'>
                    <h3>5.5</h3> 
                    <small> feet</small>
                </div>
                <p>Height</p>
            </div>
            <div className='col'>
                <div className='first'>
                    <h3>60 </h3> 
                    <small> kg</small>
                </div>
                <p>Weight</p>
            </div>
            <div className='col'>
                <div className='first'>
                    <h3>20 </h3> 
                    <small> years</small>
                </div>
                <p>Age</p>
            </div>
        </div>
    );
};

export default Details;