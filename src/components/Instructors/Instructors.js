import React from 'react';
import './instructors.css';
import { useState, useEffect } from 'react';
import Instructor from '../Instructor/Instructor';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(()=>{
        fetch('./instructors.JSON')
        .then(res => res.json())
        .then(data => setInstructors(data))
      }, []);
    return (
        <div>
            <div className="title-area">
                <h2 className="service-title">Our Instructors</h2>
            </div>
            <div className="container">
                <div className="instructors">
                {
                    instructors.map(instructor => <Instructor instructor={instructor} key={instructor.id}></Instructor> )
                }
                </div>
                <div>
                    <div>
                        <h2 className="say-title">What People Say</h2>
                       
                    </div>
                    <div class="card-group">
                    <div class="card">
                        <img src="https://ath2.unileverservices.com/wp-content/uploads/sites/3/2017/09/professional-mens-hairstyles-combed-min-1024x683.jpg" class="card-img-top card-img" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Raish</h5>
                        <p class="card-text">The course would be worthy. It canged my entire life in the way from zero to top.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://eddie-hernandez.com/wp-content/uploads/2019/07/Professional_Headshots_07.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Mariana</h5>
                        <p class="card-text">I took the graphic design course for begineers. The course quality is really appriciable. It changed my life.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://t4.ftcdn.net/jpg/01/56/19/15/360_F_156191504_F8KusEJnAdRbyztflKKtQnnU43GIyWv4.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Rishob</h5>
                        <p class="card-text">Quality content. Awesome supporting team. You wouldn't be bored never in the entire course time. Awesome Teaching quality instructors are waitning for you.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Instructors;