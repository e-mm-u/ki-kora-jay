import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const { img, name, details, time } = props.activity;
    const handleClick = props.handle;
    return (
        <div>
            <div className='activity-card'>
                <div className='activity'>
                    <img src={img} alt="" />
                    <h3>{name}</h3> 
                    <small>{details}</small>
                    <p> <small>Duration :</small> <b>{time}Hr</b> </p>
                    <button onClick={()=>handleClick(time)} >Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default Activity;