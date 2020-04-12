import React, {Component} from 'react';
import {connect} from "react-redux";
import domainDataService from "../../../services/domainDataService";
import domainDataActions from "../../../redux/actions/domainDataActions";

class eachDomainDataComponent extends Component {
    render() {
        return (
            this.props.eachDomainData
            &&
            <div className={"container-fluid"}>
                {/*<div className={"col-12 list-group-item"}>*/}
                <div
                    className={`col-12 list-group-item ${this.props.domainDataIndexToEdit
                    === this.props.index ? "bg-secondary text-white"
                        : ""}`}>
                    <div className={"row"}>
                        <div className={"col-12 col-md-11 text-truncate"}>
                            <div className={"row"}>
                                {
                                    Object.keys(this.props.eachDomainData).map(
                                        (key, index) => {
                                            /*console.log(
                                                `${key}->${this.props.eachDomainData[key]}`);*/
                                            let property = key + "";
                                            if (property.charAt(0) !== "_") {
                                                return (
                                                    <div className={"col"}
                                                         key={index}>
                                                        {typeof (this.props.eachDomainData[key])
                                                        === "object"
                                                            ? "[Object]"
                                                            : this.props.eachDomainData[key]}
                                                    </div>
                                                )
                                            }
                                        })
                                }
                            </div>
                        </div>
                        <div
                            className={"col-12 col-md-1 d-flex justify-content-center"}>
                            <div>
                                <button className={"btn btn-warning"}
                                        onClick={() =>
                                            this.props.updateDomainDataEdit(
                                                this.props.index,
                                                this.props.eachDomainData
                                            )
                                        }>
                                    <i className={"fa fa-edit"}></i>
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
    console.log('DEBUG: In EachDomainDataComponent',
        state.domainData.domainDataIndexToEdit,
        state.domainData.domainDataToEdit);
    return {
        domainDataIndexToEdit: state.domainData.domainDataIndexToEdit,
        domainDataToEdit: state.domainData.domainDataToEdit
    }
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

export default connect(stateMapper, dispatchMapper)(eachDomainDataComponent);
