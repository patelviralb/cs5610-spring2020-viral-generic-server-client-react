import {
    GET_DOMAIN_DATA,
    UPDATE_DOMAIN_DATA_INDEX,
    UPDATE_DOMAIN_DATA_TO_EDIT,
    ADD_NEW_PROPERTY
} from '../actions/domainDataActions'

const initialState = {
    domainSpecificData: [],
    domainDataIdToEdit: "",
    domainDataToEdit: {},
    domainDataNewAddedFields: {}
};

const domainsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOMAIN_DATA:
            return {
                ...state,
                domainSpecificData: action.domainData
            };

        case UPDATE_DOMAIN_DATA_INDEX:
            return {
                ...state,
                domainDataIdToEdit: action.domainDataToEditId
            };

        case UPDATE_DOMAIN_DATA_TO_EDIT:
            return {
                ...state,
                domainDataToEdit: action.domainDataToEdit
            };

        case ADD_NEW_PROPERTY:
            return {
                ...state,
                domainDataToEdit: action.newDomainDataObject
            };

        default:
            return state;
    }
};

export default domainsReducer;
