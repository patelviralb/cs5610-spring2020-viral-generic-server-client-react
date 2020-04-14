export const GET_DOMAIN_DATA = "GET_DOMAIN_DATA";
export const UPDATE_DOMAIN_DATA_INDEX = "UPDATE_DOMAIN_DATA_INDEX";
export const UPDATE_DOMAIN_DATA_TO_EDIT = "UPDATE_DOMAIN_DATA_TO_EDIT";
export const ADD_NEW_PROPERTY = "ADD_NEW_PROPERTY";

const getDomainData = (domainData) => ({
    type: GET_DOMAIN_DATA,
    domainData: domainData
});

const updateDomainDataEditId = (domainId) => ({
    type: UPDATE_DOMAIN_DATA_INDEX,
    domainDataToEditId: domainId
});

const updateDomainDataToEdit = (domainDataToEdit) => ({
    type: UPDATE_DOMAIN_DATA_TO_EDIT,
    domainDataToEdit: domainDataToEdit
});

const addNewProperty = (newDomainDataObject) => ({
    type: ADD_NEW_PROPERTY,
    newDomainDataObject: newDomainDataObject

});

export default {
    getDomainData,
    updateDomainDataEditId,
    updateDomainDataToEdit,
    addNewProperty
};
