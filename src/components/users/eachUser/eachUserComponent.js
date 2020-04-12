import React, {Component} from 'react';
import {Link} from "react-router-dom";
import usersActions from "../../../redux/actions/usersActions";
import {connect} from "react-redux";

class eachUserComponent extends Component {
    render() {
        return (
            typeof this.props.eachUser === 'string'
            &&
            <div
                className={"col-12 col-md-6 col-lg-3 text-center"}>
                <Link className={`text-decoration-none ${parseInt(
                    this.props.selectedUserIndex) === this.props.index
                    ? "text-white" : ""}`}
                      title={this.props.eachUser}
                      to={`/wam/nuids/${this.props.eachUser}`}
                      onFocus={() => this.props.updateSelectedUserIndex(
                          this.props.index)}
                      onBlur={() => this.props.updateSelectedUserIndex(-1)}
                      onMouseEnter={() => this.props.updateSelectedUserIndex(
                          this.props.index)}
                      onMouseLeave={() => this.props.updateSelectedUserIndex(
                          -1)}>
                    <li className={`list-group-item text-wrap text-truncate ${parseInt(
                        this.props.selectedUserIndex) === this.props.index
                        ? "bg-secondary" : ""}`}
                        title={`${this.props.eachUser}`}>
                        {this.props.eachUser}
                    </li>
                </Link>
            </div>
        )
    }
}

const stateMapper = (state) => {
    return {
        selectedUserIndex: state.users.selectedUserIndex
    }
};

const dispatchMapper = (dispatch) => {
    return {
        updateSelectedUserIndex: (index) => {
            dispatch(usersActions.updateSelectedUserIndex(index));
        }
    }
};

export default connect(stateMapper, dispatchMapper)(eachUserComponent);
