import React, {Component} from 'react';
import {connect} from "react-redux";
import usersService from "../../services/usersService";
import usersActions from "../../redux/actions/usersActions";
import Navbar from "../navbar";
import EachUser from './eachUser'

class UsersComponent extends Component {
    state = {
        isHighlightRequired: false,
        currentHighlightedIndex: -1
    };

    toggleHighlight = (indexToHighlight) => {
        this.setState(previousState => ({
            isHighlightRequired: !previousState.isHighlightRequired,
            currentHighlightedIndex: indexToHighlight
        }));
    };

    componentDidMount() {
        this.props.findAllUsers();
    }

    render() {
        return (
            <div>
                <div className={"mb-5"}>
                    <Navbar/>
                </div>
                <div className={"container-fluid mb-5"}>
                    <div className={"d-flex justify-content-center m-5"}>
                        <h2 className={"mt-5"}>All Available Users (NUIDs)</h2>
                    </div>
                    <ul className={"list-group"}>
                        <div className={"row"}>
                            {
                                this.props.allUniqueUsers.length > 0
                                &&
                                this.props.allUniqueUsers.map(
                                    (eachUser, index) =>
                                        <EachUser key={index}
                                                  eachUser={eachUser}
                                                  index={index}
                                                  isHighlightRequired={this.state.isHighlightRequired}
                                                  currentHighlightedIndex={this.state.currentHighlightedIndex}
                                                  toggleHighlight={this.toggleHighlight}
                                        />
                                )
                            }
                            {
                                this.props.allUniqueUsers.length <= 0
                                &&
                                <div
                                    className={"col-12 d-flex justify-content-center alert alert-warning"}>
                                    <h3>No Users Found</h3>
                                </div>
                            }
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

const stateMapper = (state) => {
    return {
        allUniqueUsers: state.users.uniqueUsers
    }
};

const dispatchMapper = (dispatch) => {
    return {
        findAllUsers: () => {
            usersService.findAllUsers().then(users => {
                if (!users.hasOwnProperty("errorMessage")) {
                    dispatch(usersActions.getUniqueUsers(users));
                }
            })
        }
    }
};

export default connect(stateMapper, dispatchMapper)(UsersComponent);
