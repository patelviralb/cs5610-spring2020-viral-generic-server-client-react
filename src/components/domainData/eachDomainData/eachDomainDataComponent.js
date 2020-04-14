import React, {Component} from 'react';
import {connect} from "react-redux";
import EachDomainDataToEdit from "./eachDomainDataToEdit";
import EachDomainDataToDisplay from "./eachDomainDataToDisplay";

class eachDomainDataComponent extends Component {
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
                        this.props.domainDataIdToEdit !== this.props.eachDomainData._id
                        &&
                        <EachDomainDataToDisplay
                            params={this.props.params}
                            eachDomainData={this.props.eachDomainData}/>
                    }
                    {
                        this.props.domainDataIdToEdit === this.props.eachDomainData._id
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
    return {}
};

export default connect(stateMapper, dispatchMapper)(eachDomainDataComponent);
