import React, {Component} from "react";
import EachDomainDataDisplay from "../eachDomainDataDisplay";
import domainDataActions from "../../../../redux/actions/domainDataActions";
import {connect} from "react-redux";

class eachDomainDataToDisplayComponent extends Component {
    render() {
        return (
            <div className={"row"}>
                <div className={"col-12 col-md-11 text-truncate"}>
                    <EachDomainDataDisplay
                        eachDomainData={this.props.eachDomainData}/>
                </div>
                <div
                    className={"col-12 col-md-1 d-flex justify-content-end"}>
                    <button className={"btn btn-warning"}
                            onClick={() =>
                                this.props.updateDomainDataEdit(
                                    this.props.index,
                                    this.props.eachDomainData
                                )
                            }>
                        <i className={"fa fa-edit"}/>
                    </button>
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

export default connect(stateMapper, dispatchMapper)(eachDomainDataToDisplayComponent);
