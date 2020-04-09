import React, {Component} from 'react';
import usersService from "../../services/usersService";
import {Link} from "react-router-dom";

class HomeComponent extends Component {
    state = {
        allUsers: []
    };

    componentDidMount() {
        usersService.findAllUsers().then(users => {
            const allUsersId = users.map(eachUser => eachUser._nuid);
            const allUniqueUsersSet = new Set(allUsersId);
            this.setState({
                allUsers: [
                    ...allUniqueUsersSet
                ]
            });
        })
    }

    render() {
        return (
            <div className={"container"}>
                {/*<div className={"d-flex justify-content-center"}>
                    <h2>All Available Users</h2>
                </div>
                <div>
                    <ul className={"list-group"}>
                        {
                            this.state.allUsers
                            &&
                            this.state.allUsers.map(eachUser => {
                                return (
                                    typeof eachUser === 'string'
                                    &&
                                    <li className={"list-group-item"}>
                                        {eachUser}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>*/}
                <h1 className={"d-flex justify-content-center"}>
                    <Link title={"All Users"} to={"/"}>
                        All Users
                    </Link>
                </h1>
            </div>
        );
    };
}

export default HomeComponent;
