import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import domainsActions from "../../../redux/actions/domainsActions";

class eachDomainComponent extends Component {
    render() {
        return (
            typeof this.props.eachDomain === 'string'
            &&
            <div
                className={"col-12"}>
                <Link className={`text-decoration-none ${parseInt(
                    this.props.selectedDomainIndex) === this.props.index
                    ? "text-white" : ""}`}
                      title={this.props.eachDomain}
                      to={`/wam/nuids/${this.props.userNUId}/domains/${this.props.eachDomain}`}
                      onFocus={() => this.props.updateSelectedDomainIndex(
                          this.props.index)}
                      onBlur={() => this.props.updateSelectedDomainIndex(-1)}
                      onMouseEnter={() => this.props.updateSelectedDomainIndex(
                          this.props.index)}
                      onMouseLeave={() => this.props.updateSelectedDomainIndex(
                          -1)}>
                    <li className={`list-group-item text-truncate ${parseInt(
                        this.props.selectedDomainIndex) === this.props.index
                        ? "bg-secondary" : ""}`}
                        title={`${this.props.eachDomain}`}>
                        {this.props.eachDomain}
                    </li>
                </Link>
            </div>
        )
    }
}

const stateMapper = (state) => {
    return {
        selectedDomainIndex: state.domains.selectedDomainIndex
    }
};

const dispatchMapper = (dispatch) => {
    return {
        updateSelectedDomainIndex: (index) => {
            dispatch(domainsActions.updateSelectedDomainIndex(index));
        }
    }
};

export default connect(stateMapper, dispatchMapper)(eachDomainComponent);
