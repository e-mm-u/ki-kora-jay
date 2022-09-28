import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const { img, name, details, time } = props.activity;
    return (
        <div>
            <div className='activity-card'>
                <div className='activity'>
                    <img src={img} alt="" />
                    <h3>{name}</h3>
                    <small>{details}</small>
                    <p>{time}Hr</p>
                    <button>Add to list</button>


                </div>
            </div>
        </div>
    );
};

export default Activity;