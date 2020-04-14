import React, {Component} from "react";
import EachDomainDataDisplay from "../eachDomainDataDisplay";
import domainDataActions from "../../../../redux/actions/domainDataActions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

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
                    <Link className={"btn btn-warning"}
                          onClick={() =>
                              this.props.updateDomainDataEdit(
                                  this.props.eachDomainData
                              )
                          }
                          to={`/wam/nuids/${this.props.params.userNUId}/domains/${this.props.params.domain}/${this.props.eachDomainData._id}`}>
                        <i className={"fa fa-edit"}/>
                    </Link>
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
        updateDomainDataEdit: (domainDataToEdit) => {
            dispatch(
                domainDataActions.updateDomainDataEditId(domainDataToEdit._id));
            dispatch(
                domainDataActions.updateDomainDataToEdit(domainDataToEdit));
        }
    }
};

export default connect(stateMapper, dispatchMapper)(
    eachDomainDataToDisplayComponent);
