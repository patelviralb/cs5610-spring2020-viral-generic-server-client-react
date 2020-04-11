import React, {Component} from 'react';

class eachDomainComponent extends Component {
    render() {
        return (
            typeof this.props.eachDomain === 'string'
            &&
            <div
                className={"col-12"}
                key={this.props.index}>
                <li className={"list-group-item text-wrap text-truncate"}
                    title={`${this.props.eachDomain}`}>
                    <h4>{this.props.eachDomain}</h4>
                </li>
            </div>
        )
    }
}

export default eachDomainComponent;
