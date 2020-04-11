import React, {Component} from 'react';
import {Link} from "react-router-dom";

class eachUserComponent extends Component {
    render() {
        return (
            typeof this.props.eachUser === 'string'
            &&
            <div
                className={"col-12 col-md-6 col-lg-3 text-center"}
                key={this.props.index}>
                <li className={"list-group-item text-wrap text-truncate"}
                    title={`${this.props.eachUser}`}>
                    <Link title={this.props.eachUser}
                          to={`/wam/users/${this.props.eachUser}`}>
                        {this.props.eachUser}
                    </Link>
                </li>
            </div>
        )
    }
}

/*
https://www.andreasreiterer.at/dynamically-add-classes/
https://bitsofco.de/when-do-the-hover-focus-and-active-pseudo-classes-apply/
*/

export default eachUserComponent;
