import React, {Component} from 'react';
import {connect} from "react-redux";
import usersService from "../../services/usersService";
import usersActions from "../../redux/actions/usersActions";
import Navbar from "../navbar";

class UsersComponent extends Component {
    componentDidMount() {
        this.props.findAllUsers();
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className={"container"}>
                    <div className={"d-flex justify-content-center m-3"}>
                        <h2>All Available Users (NUIDs)</h2>
                    </div>
                    <ul className={"list-group"}>
                        <div className={"row"}>
                            {
                                this.props.allUniqueUsers.map(
                                    (eachUser, index) => {
                                        return (
                                            typeof eachUser === 'string'
                                            &&
                                            <div
                                                className={"col-12 col-md-6 col-lg-4 text-center"}
                                                key={index}>
                                                <li className={"list-group-item"}>
                                                    {eachUser}
                                                </li>
                                            </div>
                                        )
                                    })
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
            let allUsers = [];

            usersService.findAllUsers().then(users => {
                const allUsersId = users.map(eachUser => eachUser._nuid);
                console.log('DEBUG: allUserId', allUsersId);
                const allUniqueUsersSet = new Set(allUsersId);
                console.log('DEBUG: allUniqueUsersSet', allUniqueUsersSet);
                allUsers = [
                    ...allUniqueUsersSet
                ];
                dispatch(usersActions.getUniqueUsers(allUsers));
            })
        }
    }
};

export default connect(stateMapper, dispatchMapper)(UsersComponent);
