import React, {Component} from "react";
import domainDataActions from "../../../../redux/actions/domainDataActions";
import {connect} from "react-redux";

class eachDomainDataEditComponent extends Component {

    state = {
        dataToEdit: {},
        property: "",
        propertyValue: ""
    };

    componentDidMount(): void {
        this.setState({
            dataToEdit: this.props.domainDataToEdit
        })
    }

    updateProperty = (event) => {
        if (this.state.property === "" && event.target.value.trim() !== ""
            && document.getElementById('vp-property').classList.contains(
                'alert-danger')) {
            document.getElementById('vp-property').classList.remove(
                'alert-danger');
        }
        this.setState({
            property: event.target.value
        });
    };

    updatePropertyValue = (event) => {
        if (this.state.propertyValue === "" && event.target.value.trim() !== ""
            && document.getElementById('vp-propertyValue').classList.contains(
                'alert-danger')) {
            document.getElementById('vp-propertyValue').classList.remove(
                'alert-danger');
        }
        this.setState({
            propertyValue: event.target.value
        });
    };

    addNewPropertyField = (domainId, domain, newProperty, newPropertyValue) => {
        if (newProperty.trim() !== "" && newPropertyValue.trim() !== "") {
            let newDomainDataObject = this.state.dataToEdit;
            newDomainDataObject[newProperty.trim()] = newPropertyValue.trim();
            this.setState({
                dataToEdit: newDomainDataObject,
                property: "",
                propertyValue: ""
            });
            this.props.addNewProperty(domainId, domain, newDomainDataObject);
        }
        if (newProperty.trim() === "") {
            document.getElementById('vp-property').classList.add('alert');
            document.getElementById('vp-property').classList.add(
                'alert-danger');
        }
        if (newPropertyValue.trim() === "") {
            document.getElementById('vp-propertyValue').classList.add('alert');
            document.getElementById('vp-propertyValue').classList.add(
                'alert-danger');
        }
    };

    editExistingPropertyValue = (event, domainId, domain, propertyKey) => {
        let newDomainDataObject = this.state.dataToEdit;
        newDomainDataObject[propertyKey] = event.target.value;
        this.setState({
            dataToEdit: newDomainDataObject
        });
        this.props.addNewProperty(domainId, domain, newDomainDataObject);
    };

    render() {
        return (
            <div>
                {
                    this.props.domainDataToEdit
                    &&
                    Object.keys(this.state.dataToEdit).map(
                        (key, index) => {
                            if (typeof (this.state.dataToEdit[key])
                                !== "object") {
                                let property = key + "";
                                if (property.charAt(0) !== "_") {
                                    return (
                                        <div
                                            className={"row mt-2 justify-content-center"}
                                            key={key}>
                                            <input
                                                className={"col-12 col-lg-2 form-control mr-1"}
                                                value={key} disabled/>
                                            <input
                                                className={"col-12 col-lg-9 form-control"}
                                                onChange={(event) => this.editExistingPropertyValue(
                                                    event,
                                                    this.state.dataToEdit._id,
                                                    this.props.params.domain,
                                                    key)}
                                                value={this.state.dataToEdit[key]}/>
                                        </div>
                                    )
                                }
                                return (
                                    <div
                                        className={"row mt-2 justify-content-center"}
                                        key={key}>
                                        <input
                                            className={"col-12 col-lg-2 form-control mr-1"}
                                            value={key} disabled/>
                                        <input
                                            className={"col-12 col-lg-9 form-control"}
                                            value={this.state.dataToEdit[key]}
                                            disabled/>
                                    </div>
                                )
                            }
                            return null;
                        }
                    )
                }
                <div className={"row mt-3"}>
                    <div
                        className={"col-12 text-truncate"}>
                        <div
                            className={"row mt-2 d-flex justify-content-center"}>
                            <input
                                className={"col-12 col-lg-2 form-control mr-1"}
                                id={"vp-property"}
                                value={this.state.property}
                                placeholder={"Property"}
                                onChange={this.updateProperty}/>
                            <input
                                className={"col-12 col-lg-9 form-control"}
                                id={"vp-propertyValue"}
                                value={this.state.propertyValue}
                                placeholder={"Property Value"}
                                onChange={this.updatePropertyValue}/>
                        </div>
                        <div className={"row mt-2"}>
                            <div
                                className={"col d-flex justify-content-center"}>
                                <button
                                    className={"btn btn-primary mb-2"}
                                    onClick={() => this.addNewPropertyField(
                                        this.state.dataToEdit._id,
                                        this.props.params.domain,
                                        this.state.property,
                                        this.state.propertyValue)}>
                                    <i className={"fas fa-plus mr-1"}/>
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const stateMapper = (state) => {
    return {
        domainDataToEdit: state.domainData.domainDataToEdit
    };
};

const dispatchMapper = (dispatch) => {
    return {
        addNewProperty: (domainId, domain, newDomainDataObject) => {
            dispatch(domainDataActions.addNewProperty(newDomainDataObject));
        }
    }
};

export default connect(stateMapper, dispatchMapper)(
    eachDomainDataEditComponent);
