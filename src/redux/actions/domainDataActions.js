export const GET_DOMAIN_DATA = "GET_DOMAIN_DATA";
export const UPDATE_DOMAIN_DATA_INDEX = "UPDATE_DOMAIN_DATA_INDEX";
export const UPDATE_DOMAIN_DATA_To_EDIT = "UPDATE_DOMAIN_DATA_To_EDIT";

const getDomainData = (domainData) => ({
    type: GET_DOMAIN_DATA,
    domainData: domainData
});

const updateDomainDataEditIndex = (index) => ({
    type: UPDATE_DOMAIN_DATA_INDEX,
    indexToEdit: index
});

const updateDomainDataToEdit = (domainDataToEdit) => ({
    type: UPDATE_DOMAIN_DATA_To_EDIT,
    domainDataToEdit: domainDataToEdit
});

export default {
    getDomainData,
    updateDomainDataEditIndex,
    updateDomainDataToEdit
};
