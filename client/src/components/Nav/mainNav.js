import React from "react";

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
                    <a href="/favorites" className="nav-link">Favorites</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default NavBar;