import React, {Component} from 'react';
import {Link} from "react-router-dom";

class eachUserComponent extends Component {
    render() {
        return (
            typeof this.props.eachUser === 'string'
            &&
            <div
                className={"col-12 col-md-6 col-lg-3 text-center"}>
                <Link title={this.props.eachUser}
                      to={`/wam/nuids/${this.props.eachUser}`}
                      onFocus={() => this.props.toggleHighlight(
                          this.props.index)}
                      onBlur={() => this.props.toggleHighlight(-1)}
                      onMouseEnter={() => this.props.toggleHighlight(
                          this.props.index)}
                      onMouseLeave={() => this.props.toggleHighlight(-1)}
                      className={`text-decoration-none ${this.props.currentHighlightedIndex
                      === this.props.index ? "text-white" : ""}`}>
                    <li className={`list-group-item text-wrap text-truncate ${this.props.currentHighlightedIndex
                    === this.props.index ? "bg-secondary" : ""}`}
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
