import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="about-title-area">
                <h2 className="about-title">About Us</h2>
            </div>
            <div className="about-container">
                
                <div className="why-us">
                    <div className="why-us-text">
                        <h2>Why Choose Us</h2>
                        <div className="why-us-point">
                            <h5>1. Best Education System</h5>
                            <h6><pre>  Advance Education Management</pre></h6>
                        </div>
                        <div className="why-us-point">
                            <h5>2. Learning Management</h5>
                            <h6><pre>  LMS Integration</pre></h6>
                        </div>
                        <div className="why-us-point">
                            <h5>3. Online Certification</h5>
                            <h6><pre>  Performance Based Certificate</pre></h6>
                        </div>
                    </div>
                    <div className="why-us-video">
                        <div className="video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/j-3eArinB7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>            
                    </div>
                </div>
                <div className="course-published">
                    <div className="course-nums">
                        <h2>1250</h2>
                        <p>Passed Graduates</p>
                    </div>
                    <div className="course-nums">
                        <h2>15+</h2>
                        <p>Courses Published</p>
                    </div>
                    <div className="course-nums">
                        <h2>25+</h2>
                        <p>Qualified Staff</p>
                    </div>
                    <div className="course-nums">
                        <h2>35</h2>
                        <p>Countries Reachd</p>
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default About;