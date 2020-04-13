import React, {Component} from "react";

class eachDomainDataEditComponent extends Component {
    render() {
        return (
            <div>
                {
                    this.props.eachDomainData
                    &&
                    Object.keys(this.props.eachDomainData).map(
                        (key, index) => {
                            if (typeof (this.props.eachDomainData[key])
                                !== "object") {
                                let property = key + "";
                                if (property.charAt(0) !== "_") {
                                    return (
                                        <div className={"row mb-2"} key={key}>
                                            <input
                                                className={"col-12 col-lg-2 form-control"}
                                                value={key}/>
                                            <input
                                                className={"col-12 col-lg-10 form-control"}
                                                value={this.props.eachDomainData[key]}/>
                                        </div>
                                    )
                                }
                                return (
                                    <div className={"row mb-2"} key={key}>
                                        <input
                                            className={"col-12 col-lg-2 form-control"}
                                            value={key} disabled/>
                                        <input
                                            className={"col-12 col-lg-10 form-control"}
                                            value={this.props.eachDomainData[key]}
                                            disabled/>
                                    </div>
                                )
                            }
                            return null;
                        }
                    )
                }
            </div>
        )
    }
}

export default eachDomainDataEditComponent;
