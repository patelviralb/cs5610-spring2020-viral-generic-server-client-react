import React, {Component} from 'react';
import {Link} from "react-router-dom";

class eachUserComponent extends Component {
    render() {
        return (
            typeof this.props.eachUser === 'string'
            &&
            <div
                className={"col-12 col-md-6 col-lg-3 text-center"}>
                {/*<li className={"list-group-item text-wrap text-truncate"}*/}
                <Link title={this.props.eachUser}
                      to={`/wam/users/${this.props.eachUser}`}
                      className={`${this.props.currentHighlighted
                      === this.props.index ? "text-white" : ""}`}>
                    <li className={`list-group-item text-wrap text-truncate ${this.props.currentHighlighted
                    === this.props.index ? "bg-secondary" : ""}`}
                        onMouseEnter={() => this.props.toggleHighlight(
                            this.props.index)}
                        onMouseLeave={() => this.props.toggleHighlight(-1)}
                        onFocus={() => this.props.toggleHighlight(
                            this.props.index)}
                        onBlur={() => this.props.toggleHighlight(-1)}
                        title={`${this.props.eachUser}`}>
                        {this.props.eachUser}
                    </li>
                </Link>
            </div>
        )
    }
}

/*
https://www.andreasreiterer.at/dynamically-add-classes/
https://bitsofco.de/when-do-the-hover-focus-and-active-pseudo-classes-apply/
*/

export default eachUserComponent;
