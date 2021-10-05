import React from 'react';
import './service.css';

const Service = (props) => {
    const {name, coursefee, img} = props.service;
    return (
        <div className="service-card">
            <img src={img} alt="" />
            <div className="card-text">
                <p><b>Course name: {name}</b></p>
                <p>Course Fee: {coursefee}</p>
                <button>View Details</button>
            </div>
        </div>
    );
};

export default Service;