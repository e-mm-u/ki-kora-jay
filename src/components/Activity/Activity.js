import React from 'react';
import './Activity.css'

const Activity = (props) => {
    return (
        <div className='activity-card'>
            <div className='activity'>
                <img src={props.activity.img} alt="" />

            </div>
        </div>
    );
};

export default Activity;