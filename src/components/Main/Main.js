import './Main.css'
import Sidebar from '../Sidebar/Sidebar';
import Activities from '../Activities/Activities';
import { useState } from 'react';

const Main = () => {
    const [pretime, setTime] = useState(0);

    const handleClick = (time) => {
        // console.log('clicked ', time);
        const newTime = pretime + parseFloat(time);
        setTime(newTime)
    }


    return (
        <div className='main'>
            <Activities handle={handleClick}></Activities>
            <Sidebar time={pretime}></Sidebar>
        </div>
    );
};

export default Main;