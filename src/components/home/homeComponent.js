import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Navbar from "../navbar";

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1 className={"d-flex justify-content-center"}>
                    <Link title={"All Users"} to={"/wam/users"}>
                        All Users
                    </Link>
                </h1>
            </div>
        );
    }
}

export default HomeComponent;
