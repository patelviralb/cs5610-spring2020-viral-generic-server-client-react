import {
    GET_UNIQUE_DOMAINS,
    UPDATE_SELECTED_DOMAIN_INDEX
} from '../actions/domainsActions'

const initialState = {
    uniqueDomains: [],
    selectedDomainIndex: -1
};

const domainsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_UNIQUE_DOMAINS:
            return {
                ...state,
                uniqueDomains: action.uniqueDomains
            };

        case UPDATE_SELECTED_DOMAIN_INDEX:
            return {
                ...state,
                selectedDomainIndex: action.selectedDomainIndex
            };

        default:
            return state;
    }
};

export default domainsReducer;
