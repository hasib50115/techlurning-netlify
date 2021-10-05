import React from 'react';
import './instructor.css';

const Instructor = (props) => {
    const {name, designation, img} = props.instructor;
    return (
        <div className="instructor">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="card-text">
                <p><b>{name}</b></p>
                <p>{designation}</p> 
            </div>           
        </div>
    );
};

export default Instructor;