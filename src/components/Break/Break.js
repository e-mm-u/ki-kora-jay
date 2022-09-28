import React from 'react';
import './Break.css'
const Break = () => {
    return (
        <div className='add-a-break'>
            <h3>Add a Break</h3>
            <div className='break'>
                <div className='break-time'><span>15</span>min</div>
                <div className='break-time'><span>20</span>min</div>
                <div className='break-time'><span>30</span>min</div>
                <div className='break-time'><span>45</span>min</div>
            </div>
        </div>
    );
};

export default Break;