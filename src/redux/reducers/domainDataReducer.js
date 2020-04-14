import {
    GET_DOMAIN_DATA,
    UPDATE_DOMAIN_DATA_INDEX,
    UPDATE_DOMAIN_DATA_TO_EDIT,
    ADD_NEW_PROPERTY, UPDATE_DOMAIN_DATA_ARRAY_AFTER_DELETE
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

        case UPDATE_DOMAIN_DATA_ARRAY_AFTER_DELETE:
            let newDomainDataArray = state.domainSpecificData.filter(eachDomainData => eachDomainData._id !== action.domainIdToDelete);
            return {
                ...state,
                domainSpecificData: newDomainDataArray
            };

        default:
            return state;
    }
};

export default domainsReducer;
