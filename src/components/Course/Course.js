import React from 'react';
import './course.css';

const Course = (props) => {
    const {name, coursefee, img} = props.course;
    return (
        <div className="service-card">
            <img src={img} alt="" />
            <p><b>Course name: {name}</b></p>
            <p>Course Fee: {coursefee}</p>
            <button>View Details</button>
        </div>
    );
};

export default Course;