import React from 'react';
//import {Link} from 'react-router-dom'

export default function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                
                <li className="nav-item">
                    <a href="/mainadmin" className="nav-link active">Home</a>
                </li>

                <li className="nav-item">
                    <a href="/add" className="nav-link">Create Note</a>
                </li>
                
                <li className="nav-item">
                    <a href="/get" className="nav-link">All notes</a>
                </li>
                
            </ul>
            </div>
        </div>
        </nav>
    );
}