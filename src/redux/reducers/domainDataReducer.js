import {
    GET_DOMAIN_DATA,
    UPDATE_DOMAIN_DATA_INDEX,
    UPDATE_DOMAIN_DATA_To_EDIT
} from '../actions/domainDataActions'

const initialState = {
    domainSpecificData: [],
    domainDataIndexToEdit: -1,
    domainDataToEdit: {}
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
                domainDataIndexToEdit: action.indexToEdit
            };

        case UPDATE_DOMAIN_DATA_To_EDIT:
            return {
                ...state,
                domainDataToEdit: action.domainDataToEdit
            };

        default:
            return state;
    }
};

export default domainsReducer;
