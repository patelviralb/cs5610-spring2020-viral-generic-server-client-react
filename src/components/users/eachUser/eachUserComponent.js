import React, {Component} from 'react';

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
                    {this.props.eachUser}
                </li>
            </div>
        )
    }
}

export default eachUserComponent;
