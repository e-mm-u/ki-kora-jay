import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'

const Activities = () => {
    const [activities, setActivities] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])

    return (
        <div className='activities'>
            {
                activities.map(activity =><Activity activity={activity}></Activity>)
            }
        </div>
    );
};

export default Activities;