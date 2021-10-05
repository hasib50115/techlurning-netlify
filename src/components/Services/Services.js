import React from 'react';
import { useState, useEffect } from 'react';
import Service from '../Service/Service';
import './services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
      }, []);

    return (
        <div>
            <div className="title-area">
                <h2 className="service-title">Our Courses</h2>
            </div>
            <div className="services-container">
            {
                services.map(service => <Service service={service} key={service.id}></Service> )
            }
            </div>

        </div>
    );
};

export default Services;