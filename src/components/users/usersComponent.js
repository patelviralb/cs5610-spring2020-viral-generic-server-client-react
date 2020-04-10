import React, {Component} from 'react';
import {connect} from "react-redux";
import usersService from "../../services/usersService";
import usersActions from "../../redux/actions/usersActions";
import Navbar from "../navbar";
import EachUser from './eachUser'

class UsersComponent extends Component {
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
                                this.props.allUniqueUsers.map(
                                    (eachUser, index) =>
                                        <EachUser key={index}
                                                  eachUser={eachUser}/>
                                )
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
