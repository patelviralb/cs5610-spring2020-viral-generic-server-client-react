import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Navbar from "../navbar";
import wamImage from './web-access-management.png'

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <div className={"mb-5"}>
                    <Navbar/>
                </div>
                <div className="text-center">
                    <img src={wamImage}
                         className={"rounded mx-auto d-block pt-5"}
                         alt={"Web Access Management"}/>
                </div>
                <h1 className={"d-flex justify-content-center mt-5"}>
                    <Link className={"mt-5"} title={"All Users"}
                          to={"/wam/nuids"}>
                        All Users
                    </Link>
                </h1>
            </div>
        );
    }
}

export default HomeComponent;
