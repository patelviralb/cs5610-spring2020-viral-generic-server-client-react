import React, {Component} from 'react';
import {connect} from "react-redux";
import domainsService from "../../services/domainsService";
import domainsActions from "../../redux/actions/domainsActions";
import Navbar from "../navbar";
import EachDomain from './eachDomain'

class DomainsComponent extends Component {
    componentDidMount() {
        this.props.findAllDomainsForUser(this.props.match.params.userNUId);
        this.props.resetDomainSelectedIndex();
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
                                        `/wam/nuids`)
                                }
                        >
                            <i className="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
                <div className={"container-fluid mb-5"}>
                    <div className={"d-flex justify-content-center mb-5"}>
                        <h2>Domains
                            for {this.props.match.params.userNUId}</h2>
                    </div>
                    <ul className={"list-group"}>
                        <div className={"row"}>
                            {
                                this.props.allUniqueDomains.length > 0
                                &&
                                this.props.allUniqueDomains.map(
                                    (eachDomain, index) =>
                                        <EachDomain key={index}
                                                    eachDomain={eachDomain}
                                                    userNUId={this.props.match.params.userNUId}
                                                    index={index}
                                        />
                                )
                            }
                            {
                                this.props.allUniqueDomains.length <= 0
                                &&
                                <div
                                    className={"col-12 d-flex justify-content-center alert alert-warning"}>
                                    <h3>No Domains Found</h3>
                                </div>
                            }
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

const stateMapper = (state) => {
    return {
        allUniqueDomains: state.domains.uniqueDomains
    }
};

const dispatchMapper = (dispatch) => {
    return {
        findAllDomainsForUser: (userNUId) => {
            domainsService.findAllDomainsForUser(userNUId).then(userDomains => {
                if (!userDomains.hasOwnProperty("errorMessage")) {
                    dispatch(domainsActions.getUniqueDomains(userDomains));
                }
            })
        },
        resetDomainSelectedIndex: () => {
            dispatch(domainsActions.updateSelectedDomainIndex(-1));
        }
    }
};

export default connect(stateMapper, dispatchMapper)(DomainsComponent);
