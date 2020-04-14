import React, {Component} from 'react';
import {connect} from "react-redux";
import EachDomainDataToEdit from "./eachDomainDataToEdit";
import EachDomainDataToDisplay from "./eachDomainDataToDisplay";
import domainDataActions from "../../../redux/actions/domainDataActions";
import domainDataService from "../../../services/domainDataService";

class eachDomainDataComponent extends Component {
    componentDidMount(): void {
        if (typeof (this.props.params.domainId) !== "undefined") {
            domainDataService.findSpecificDomainData(
                this.props.params.userNUId,
                this.props.params.domain,
                this.props.params.domainId).then(specificDomainData => {
                if (!specificDomainData.hasOwnProperty("errorMessage")) {
                    this.props.updateDomainDataEdit(
                        this.props.params.domainId, specificDomainData);
                }
            })
        }
    }

    render() {
        return (
            this.props.eachDomainData
            &&
            <div className={"container-fluid"}>
                <div
                    className={`col-12 list-group-item ${this.props.domainDataIdToEdit
                    === this.props.eachDomainData._id ? "border border-info"
                        : ""}`}>
                    {
                        this.props.domainDataIdToEdit
                        !== this.props.eachDomainData._id
                        &&
                        <EachDomainDataToDisplay
                            params={this.props.params}
                            eachDomainData={this.props.eachDomainData}/>
                    }
                    {
                        this.props.domainDataIdToEdit
                        === this.props.eachDomainData._id
                        &&
                        <EachDomainDataToEdit
                            params={this.props.params}
                            eachDomainData={this.props.eachDomainData}/>
                    }
                </div>
            </div>
        )
    }
}

const stateMapper = (state) => {
    return {
        domainDataIdToEdit: state.domainData.domainDataIdToEdit
    }
};

const dispatchMapper = (dispatch) => {
    return {
        updateDomainDataEdit: (domainId, specificDomainData) => {
            dispatch(domainDataActions.updateDomainDataEditId(domainId));
            dispatch(
                domainDataActions.updateDomainDataToEdit(specificDomainData));
        }
    }
};

export default connect(stateMapper, dispatchMapper)(eachDomainDataComponent);
