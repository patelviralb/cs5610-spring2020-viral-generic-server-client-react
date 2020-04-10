import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Navbar from "../navbar";

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <div className={"mb-5"}>
                    <Navbar />
                </div>
                <h1 className={"d-flex justify-content-center mt-5"}>
                    <Link className={"mt-5"} title={"All Users"} to={"/wam/users"}>
                        All Users
                    </Link>
                </h1>
            </div>
        );
    }
}

export default HomeComponent;
