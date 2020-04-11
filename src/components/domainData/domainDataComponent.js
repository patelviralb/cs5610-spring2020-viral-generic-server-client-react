import React, {Component} from "react";
import {Link} from "react-router-dom";
import Navbar from "../navbar";

class domainDataComponent extends Component {
    render() {
        return (
            <div>
                <div className={"mb-5"}>
                    <Navbar/>
                </div>
                <div className={"container-fluid row mt-5"}>
                    <div className={"col-12 col-md-6 mt-5"}>
                        <Link className={"btn btn-primary"} to={`/wam/nuids/${this.props.match.params.userNUId}`}>
                            <i className="fas fa-arrow-left"></i> Back
                        </Link>
                    </div>
                </div>
                <div className={"container-fluid mb-5"}>
                    <div className={"d-flex justify-content-center"}>
                        <h2 className={""}>Domain {this.props.match.params.domain}</h2>
                    </div>
                    <ul className={"list-group"}>
                        <div className={"row"}>
                            {/*{
                                this.props.allUniqueDomains.length > 0
                                &&
                                this.props.allUniqueDomains.map(
                                    (eachDomain, index) =>
                                        <EachDomain key={index}
                                                    eachDomain={eachDomain}/>
                                )
                            }
                            {
                                this.props.allUniqueDomains.length <= 0
                                &&
                                <div
                                    className={"col-12 d-flex justify-content-center alert alert-warning"}>
                                    <h1>No Domains Found</h1>
                                </div>
                            }*/}
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}

export default domainDataComponent;
