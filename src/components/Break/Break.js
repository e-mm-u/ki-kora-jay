import React from 'react';
import './Break.css'

const Break = (props) => {
    const {breakFnc} = props;

    return (
        <div className='add-a-break'>
            <h3>Add a Break</h3>
            <div className='break'>
                <div onClick={()=>breakFnc(15)} className='break-time'>15min</div>
                <div onClick={()=>breakFnc(20)} className='break-time'>20min</div>
                <div onClick={()=>breakFnc(30)} className='break-time'>30min</div>
                <div onClick={()=>breakFnc(45)} className='break-time'>45min</div>
            </div>
        </div>
    );
};

export default Break;