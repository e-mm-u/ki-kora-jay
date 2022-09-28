import React, { useState } from 'react';
import './Selected.css'

const Selected = (props) => {

    // const [selectedTime, setTtotalTime] = useState(0)

    return (
        <div>
            <h3>Selected Task Details</h3>
            <div className="selected-time">Required Time : {props.time} Hours</div>
            <div className="selected-break-time">Break Time : </div>
        </div>
    );
};

export default Selected;