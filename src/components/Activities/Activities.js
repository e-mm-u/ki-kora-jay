import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'

const Activities = (props) => {
    const {handle} = props;
    const [activities, setActivities] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])
    
    
    return (
        <div>
            <h1>Add activities to your list and get it done. </h1>
            <div className='activities'>

                {
                    activities.map(activity => <Activity
                        activity={activity}
                        handle={handle}
                        key={activity.id}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Activities;