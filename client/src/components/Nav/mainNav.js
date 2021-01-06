import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand navname">Vincent Doria Jr.</a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarmenu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarmenu">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/favorites" className="nav-link">Favorites</Link>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default NavBar;