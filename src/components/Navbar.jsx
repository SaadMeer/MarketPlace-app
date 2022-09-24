import React from 'react';
// import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <a class="navbar-brand">Market<b>Place</b></a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className='nav-link' to='/'>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' to='services'>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' to='/contact'>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <button type="button" class="btn">Log In</button>
                    <button type="button" class="btn btn-outline-primary">Sign Up</button>
                </div>
            </nav>





            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a to='' class="navbar-brand">Market<b>Place</b></a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
                    <div class="navbar-nav">
                        <a href="#" class="nav-item nav-link">Home</a>
                        <a href="#" class="nav-item nav-link">About</a>
                        <div class="nav-item dropdown">
                            <a href="#" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle">Services</a>
                            <div class="dropdown-menu">
                                <a href="#" class="dropdown-item">Web Design</a>
                                <a href="#" class="dropdown-item">Web Development</a>
                                <a href="#" class="dropdown-item">Graphic Design</a>
                                <a href="#" class="dropdown-item">Digital Marketing</a>
                            </div>
                        </div>
                        <a href="#" class="nav-item nav-link active">Pricing</a>
                        <a href="#" class="nav-item nav-link">Blog</a>
                        <a href="#" class="nav-item nav-link">Contact</a>
                    </div>
                    <form class="navbar-form form-inline">
                        <div class="input-group search-box">
                            <input type="text" id="search" class="form-control" placeholder="Search here..." />
                                <div class="input-group-append">
                                    <span class="input-group-text">
                                        <i class="material-icons">&#xE8B6;</i>
                                    </span>
                                </div>
                        </div>
                    </form>
                    <div class="navbar-nav ml-auto action-buttons">
                        <div class="nav-item">
                            <a href="#" class="nav-link dropdown-toggle mr-4">Login</a>
                        </div>
                        <div class="nav-item">
                            <a href="#" class="btn btn-primary dropdown-toggle sign-up-btn">Sign up</a>
                        </div>
                    </div>
                </div>
            </nav> */}
        </div>
    );
}

export default Navbar;
