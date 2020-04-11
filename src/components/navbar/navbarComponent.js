import React from 'react';
import {Link} from "react-router-dom";

const NavbarComponent = () =>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to={"/wam"}>Home</Link>
        <Link className="navbar-brand" to={"/wam/nuids"}>Users</Link>
        {/*<button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarText" aria-controls="navbarText"
                aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active" data-toggle="collapse" data-target="navbar-collapse.show">
                    <Link className="nav-link" to={"/wam"}>Home</Link>
                </li>
                <li className="nav-item" data-toggle="collapse" data-target="navbar-collapse.show">
                    <Link className="nav-link" to={"/wam/nuids"}>Users</Link>
                </li>
            </ul>
            <span
                className="navbar-text">Navbar text with an inline element</span>
        </div>*/}
    </nav>;

export default NavbarComponent;
