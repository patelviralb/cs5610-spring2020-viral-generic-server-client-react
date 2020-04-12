import React, {Component} from 'react';

class eachDomainDataDisplayComponent extends Component {
    render() {
        return (
            <div className={"row"}>
                {
                    Object.keys(this.props.eachDomainData).map(
                        (key, index) => {
                            let property = key + "";
                            if (property.charAt(0) !== "_") {
                                return (
                                    <div className={"col"}
                                         key={index}>
                                        {typeof (this.props.eachDomainData[key])
                                        === "object"
                                            ? "[Object]"
                                            : this.props.eachDomainData[key]}
                                    </div>
                                )
                            }
                            return null
                        }
                    )
                }
            </div>
        )
    }
}

export default eachDomainDataDisplayComponent;
