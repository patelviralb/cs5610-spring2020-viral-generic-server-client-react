import React, {Component} from "react";
import domainDataActions from "../../../../redux/actions/domainDataActions";
import {connect} from "react-redux";
import EachDomainDataEditComponent from "../eachDomainDataEdit";
import domainDataService from "../../../../services/domainDataService";

class eachDomainDataToEditComponent extends Component {
    render() {
        return (
            <div>
                <div className={"row mb-2"}>
                    <div
                        className={"col-12 d-flex justify-content-end"}>
                        <button className={"btn btn-success"}
                                onClick={() => this.props.saveDomainDataChanges(
                                    this.props.userNUId,
                                    this.props.params.domain,
                                    this.props.domainDataToEdit)}>
                            <i className={"fas fa-save mr-1"}/>
                            Save
                        </button>
                        <button
                            className={"btn btn-danger ml-2"}
                            onClick={() => this.props.deleteDomainData(
                                this.props.userNUId,
                                this.props.params.domain,
                                this.props.domainDataToEdit._id)}>
                            <i className={"fas fa-trash-alt mr-1"}/>
                            Delete
                        </button>
                        <button
                            className={"btn btn-warning ml-2"}
                            onClick={() =>
                                this.props.updateDomainDataEdit(
                                    -1, null)
                            }>
                            <i className={"fas fa-times mr-1"}/>
                            Cancel
                        </button>
                    </div>
                </div>
                <div className={"row"}>
                    <div
                        className={"col-12 text-truncate"}>
                        <EachDomainDataEditComponent
                            params={this.props.params}/>
                    </div>
                </div>
            </div>
        )
    }
}

const stateMapper = (state) => {
    return {
        domainDataToEdit: state.domainData.domainDataToEdit
    };
};

const dispatchMapper = (dispatch) => {
    return {
        updateDomainDataEdit: (index, domainDataToEdit) => {
            dispatch(domainDataActions.updateDomainDataEditIndex(index));
            dispatch(
                domainDataActions.updateDomainDataToEdit(domainDataToEdit));
        },
        saveDomainDataChanges: (userNUId, domain, updatedDomainData) => {
            domainDataService.saveUpdatedDomainData(userNUId, domain,
                updatedDomainData._id, updatedDomainData).then(
                updatedDomainData => {
                    if (!updatedDomainData.hasOwnProperty("errorMessage")) {
                        dispatch(
                            domainDataActions.updateDomainDataEditIndex(-1));
                        dispatch(
                            domainDataActions.updateDomainDataToEdit(null));
                    }
                });
        },
        deleteDomainData: (userNUId, domain, domainId) => {
            domainDataService.deleteDomainData(userNUId, domain, domainId).then(
                removedDomainData => {
                    if (!removedDomainData.hasOwnProperty("errorMessage")) {
                        dispatch(
                            domainDataActions.updateDomainDataEditIndex(-1));
                        dispatch(
                            domainDataActions.updateDomainDataToEdit(null));
                        domainDataService.findAllDomainSpecificData(userNUId, domain).then(
                            domainData => {
                                if (!domainData.hasOwnProperty("errorMessage")) {
                                    dispatch(domainDataActions.getDomainData(domainData));
                                }
                            })
                    }
                });
        },
        reloadDomainDataToEdit: (index, domainDataToEdit) => {
            dispatch(domainDataActions.updateDomainDataEditIndex(index));
            dispatch(
                domainDataActions.updateDomainDataToEdit(domainDataToEdit));
        }
    }
};

export default connect(stateMapper, dispatchMapper)(
    eachDomainDataToEditComponent);
