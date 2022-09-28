import React from 'react';
import './Selected.css'

const Selected = () => {
    return (
        <div>
            <h3>Selected Task Details</h3>
            <div className="selected-time">Required Time (total) : <span></span></div>
            <div className="selected-break-time">Break Time : <span></span></div>
        </div>
    );
};

export default Selected;