import React, {Component} from 'react';
import {connect} from "react-redux";
import domainsService from "../../services/domainsService";
import domainsActions from "../../redux/actions/domainsActions";
import Navbar from "../navbar";
import EachDomain from './eachDomain'

class DomainsComponent extends Component {
    componentDidMount() {
        this.props.findAllDomainsForUser(this.props.match.params.userNUId);
    }

    render() {
        return (
            <div>
                <div className={"mb-5"}>
                    <Navbar/>
                </div>
                <div className={"container-fluid mb-5"}>
                    <div className={"d-flex justify-content-center m-5"}>
                        <h2 className={"mt-5"}>All Available Domains</h2>
                    </div>
                    <ul className={"list-group"}>
                        <div className={"row"}>
                            {
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
            let allDomains = [];

            domainsService.findAllDomainsForUser(userNUId).then(userDomains => {
                if (!userDomains.hasOwnProperty("errorMessage")) {
                    /*const allUserDomains = userDomains.map(
                        eachDomain => eachDomain._domain);
                    /!*console.log('DEBUG: allUserId', allUsersId);*!/
                    const allUniqueDomainsSet = new Set(allUserDomains);
                    /!*console.log('DEBUG: allUniqueUsersSet', allUniqueUsersSet);*!/
                    allDomains = [
                        ...allUniqueDomainsSet
                    ];*/
                    dispatch(domainsActions.getUniqueDomains(userDomains));
                }
            })
        }
    }
};

export default connect(stateMapper, dispatchMapper)(DomainsComponent);
