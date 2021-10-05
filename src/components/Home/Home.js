import React from 'react';
import { useState, useEffect } from 'react';
import Course from '../Course/Course';
import './home.css';

const Home = () => {
    const [courses, setCourse] = useState([]);
    useEffect(()=>{
        fetch('./serviceHome.JSON')
        .then(res => res.json())
        .then(data => setCourse(data))
      }, []);
    return (
        <div>
            <div>
                <h2 className="home-title">Education & Training Organization.</h2>
            </div>
            <div>
                <img className="banner-image" src="https://educationtechnologysolutions.com/wp-content/uploads/2016/06/students_coding.jpg" alt="" />
            </div>
            <div className="container">
                <h2 className="home-title">Top Courses</h2>                           
            </div>
            <div className="best">
             
            {
                courses.map(course => <Course course={course} key={course.id}></Course> )
            }
            </div>
        </div>
    );
};

export default Home;