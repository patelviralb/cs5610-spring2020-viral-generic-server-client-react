import React, {Component} from 'react';
import {connect} from "react-redux";
import domainsService from "../../services/domainsService";
import domainsActions from "../../redux/actions/domainsActions";
import Navbar from "../navbar";
import EachDomain from './eachDomain'

class DomainsComponent extends Component {
    state = {
        isHighlightRequired: false,
        currentHighlightedIndex: -1
    };

    toggleHighlight = (indexToHighlight) => {
        this.setState(previousState => ({
            isHighlightRequired: !previousState.isHighlightRequired,
            currentHighlightedIndex: indexToHighlight
        }));
    };

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
                        <h2 className={"mt-5"}>All Available Domains
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
                                                    isHighlightRequired={this.state.isHighlightRequired}
                                                    currentHighlightedIndex={this.state.currentHighlightedIndex}
                                                    toggleHighlight={this.toggleHighlight}
                                        />
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
            domainsService.findAllDomainsForUser(userNUId).then(userDomains => {
                if (!userDomains.hasOwnProperty("errorMessage")) {
                    dispatch(domainsActions.getUniqueDomains(userDomains));
                }
            })
        }
    }
};

export default connect(stateMapper, dispatchMapper)(DomainsComponent);
