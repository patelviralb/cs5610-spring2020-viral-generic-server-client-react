import React, {Component} from "react";
import domainDataActions from "../../../../redux/actions/domainDataActions";
import {connect} from "react-redux";
import EachDomainDataEditComponent from "../eachDomainDataEdit";

class eachDomainDataToEditComponent extends Component {
    render() {
        return (
            <div>
                <div className={"row mb-2"}>
                    <div
                        className={"col-12 d-flex justify-content-end"}>
                        <button className={"btn btn-success"}>
                            <i className={"fas fa-save mr-1"}/>
                            Save
                        </button>
                        <button
                            className={"btn btn-danger ml-2"}>
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
                            eachDomainData={this.props.eachDomainData}/>
                    </div>
                </div>
                <div className={"row mt-3"}>
                    <div
                        className={"col-12 text-truncate"}>
                        <div className={"row"}>
                            <input
                                className={"col-12 col-lg-2 form-control"}/>
                            <input
                                className={"col-12 col-lg-10 form-control"}/>
                        </div>
                        <div className={"row mt-2"}>
                            <div
                                className={"col d-flex justify-content-center"}>
                                <button
                                    className={"btn btn-primary"}>
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const stateMapper = (state) => {
    return {};
};

const dispatchMapper = (dispatch) => {
    return {
        updateDomainDataEdit: (index, domainDataToEdit) => {
            dispatch(domainDataActions.updateDomainDataEditIndex(index));
            dispatch(
                domainDataActions.updateDomainDataToEdit(domainDataToEdit));
        }
    }
};

export default connect(stateMapper, dispatchMapper)(eachDomainDataToEditComponent);
