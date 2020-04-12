import React, {Component} from 'react';

class eachDomainDataComponent extends Component {
    render() {
        return (
            this.props.eachDomainData
            &&
            <div className={"container-fluid"}>
                <div className={"col-12 list-group-item"}>
                    <div className={"row"}>
                        <div className={"col-12 col-md-11 text-truncate"}>
                            {
                                console.log('DEBUG: each property:')
                            }
                            <div className={"row"}>
                                {
                                    Object.keys(this.props.eachDomainData).map(
                                        (key, index) => {
                                            console.log(`${key}->${this.props.eachDomainData[key]}`);
                                            let property = key + "";
                                            if (property.charAt(0) !== "_") {
                                                return (
                                                    <div className={"col"}
                                                         key={index}>
                                                        {typeof (this.props.eachDomainData[key]) === "object" ? "[Object]" : this.props.eachDomainData[key]}
                                                    </div>
                                                )
                                            }
                                        })
                                }
                            </div>
                        </div>
                        <div
                            className={"col-12 col-md-1 d-flex justify-content-center"}>
                            <div>
                                <button className={"btn btn-warning"}>
                                    <i className={"fa fa-edit"}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default eachDomainDataComponent;
