import React, {Component} from 'react';
import {Link} from "react-router-dom";

class eachDomainComponent extends Component {
    render() {
        return (
            typeof this.props.eachDomain === 'string'
            &&
            <div
                className={"col-12"}>
                <Link title={this.props.eachDomain}
                      to={`/wam/nuids/${this.props.userNUId}/domains/${this.props.eachDomain}`}
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
                        title={`${this.props.eachDomain}`}>
                        {this.props.eachDomain}
                    </li>
                </Link>
            </div>
        )
    }
}

export default eachDomainComponent;
