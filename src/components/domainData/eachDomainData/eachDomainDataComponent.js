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
                    className={`col-12 list-group-item ${this.props.domainDataIndexToEdit
                    === this.props.index ? "border border-info"
                        : ""}`}>
                    {
                        this.props.domainDataIndexToEdit !== this.props.index
                        &&
                        <EachDomainDataToDisplay
                            index={this.props.index}
                            eachDomainData={this.props.eachDomainData}/>
                    }
                    {
                        this.props.domainDataIndexToEdit === this.props.index
                        &&
                        <EachDomainDataToEdit
                            eachDomainData={this.props.eachDomainData}/>
                    }
                </div>
            </div>
        )
    }
}

const stateMapper = (state) => {
    return {
        domainDataIndexToEdit: state.domainData.domainDataIndexToEdit,
        domainDataToEdit: state.domainData.domainDataToEdit
    }
};

const dispatchMapper = (dispatch) => {
    return {}
};

export default connect(stateMapper, dispatchMapper)(eachDomainDataComponent);
