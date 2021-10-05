import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div class="bg-light">
            <nav class="navbar navbar-light">
                <div class="container-fluid navbar">
                <a class="navbar-brand"><h2 className="logo">Techlurning</h2></a>
                <form class="d-flex">
                    <Link className="nav-anchor" to="/home">Home</Link>
                    <Link className="nav-anchor" to="/about">About</Link>
                    <Link className="nav-anchor" to="/services">Services</Link>
                    <Link className="nav-anchor" to="/instructors">Instructor</Link>
                </form>
                </div>
            </nav>
            
        </div>
    );
};

export default Header;
