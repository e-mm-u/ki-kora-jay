import './Selected.css'

const Selected = (props) => {

    const { time, breakTime } = props;

    return (
        <div>
            <h3>Selected Task Details</h3>
            <div className="selected-time">Required Time : {time} Hours</div>
            <div className="selected-break-time">Break Time : {
                localStorage.getItem('break-time') ? localStorage.getItem('break-time') : breakTime
            } Minutes</div>
        </div>
    );
};

export default Selected;