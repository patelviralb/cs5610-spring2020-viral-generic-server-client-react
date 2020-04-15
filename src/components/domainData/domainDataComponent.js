import React, {Component} from "react";
import {connect} from "react-redux";
import Navbar from "../navbar";
import domainDataService from "../../services/domainDataService";
import domainDataActions from "../../redux/actions/domainDataActions";
import EachDomainData from "./eachDomainData";
import domainsService from "../../services/domainsService";

class domainDataComponent extends Component {
    componentDidMount() {
        this.props.findAllDomainData(this.props.match.params.userNUId,
            this.props.match.params.domain);
        this.props.resetDomainDataSelectedId();
    }

    render() {
        return (
            <div>
                <div className={"mb-5"}>
                    <Navbar/>
                </div>
                <div className={"container-fluid row mt-5"}>
                    <div className={"col-12 col-md-6 mt-5"}>
                        <button className={"btn btn-primary"}
                                onClick={() =>
                                    this.props.history.push(
                                        `/wam/nuids/${this.props.match.params.userNUId}`)
                                }
                        >
                            <i className="fas fa-arrow-left"/> Back
                        </button>
                    </div>
                </div>
                <div className={"container-fluid mb-5"}>
                    <div className={"d-flex justify-content-center mb-2"}>
                        <h2 className={"font-weight-bold"}>
                            {this.props.match.params.domain}
                        </h2>
                    </div>
                    <div className={"d-flex justify-content-center mb-5"}>
                        <button className={"btn btn-primary"}
                                onClick={() => this.props.addNewDomainData(
                                    this.props.match.params.userNUId,
                                    this.props.match.params.domain)}>
                            <i className={"fa fa-plus"}/> Add new object
                            to {this.props.match.params.domain}
                        </button>
                    </div>
                    <ul className={"list-group"}>
                        <div className={"row"}>
                            {
                                this.props.domainSpecificData.length > 0
                                &&
                                this.props.domainSpecificData.map(
                                    (eachDomainData, index) =>
                                        <EachDomainData key={index}
                                                        params={this.props.match.params}
                                                        eachDomainData={eachDomainData}
                                        />
                                )
                            }
                            {
                                this.props.domainSpecificData.length <= 0
                                &&
                                <div
                                    className={"col-12 d-flex justify-content-center alert alert-warning"}>
                                    <h3>No data present for
                                        domain {this.props.match.params.domain}</h3>
                                </div>
                            }
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}

const stateMapper = (state) => {
    return {
        domainSpecificData: state.domainData.domainSpecificData,
        domainDataIdToEdit: state.domainData.domainDataIdToEdit
    }
};

const dispatchMapper = (dispatch) => {
    return {
        findAllDomainData: (userNUId, domain) => {
            domainDataService.findAllDomainSpecificData(userNUId, domain).then(
                domainData => {
                    if (!domainData.hasOwnProperty("errorMessage")) {
                        dispatch(domainDataActions.getDomainData(domainData));
                    }
                })
        },
        resetDomainDataSelectedId: () => {
            dispatch(domainDataActions.updateDomainDataEditId(""));
            dispatch(
                domainDataActions.updateDomainDataToEdit(null));
        },
        addNewDomainData: (userNUId, domain) => {
            console.log('DEBUG: Add new Domain Data',userNUId,domain);
            domainsService.addNewDomain(userNUId, domain).then(
                domainAddResponse => {
                    if (!domainAddResponse.hasOwnProperty("errorMessage")) {
                        console.log('DEBUG: domainAddResponse',domainAddResponse);
                        dispatch(domainDataActions.addNewDomainSpecificData(domainAddResponse));
                    }
                });
        }
    }
};

export default connect(stateMapper, dispatchMapper)(domainDataComponent);
