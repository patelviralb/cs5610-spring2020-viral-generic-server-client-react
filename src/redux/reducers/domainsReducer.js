import {
    ADD_NEW_DOMAIN,
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

        case ADD_NEW_DOMAIN:
            let newDomainIndex = state.uniqueDomains.findIndex(
                eachDomain => eachDomain === action.newDomain);
            let newSelectedIndex;
            let newDomainsArray;
            if(newDomainIndex < 0) {
                newSelectedIndex = 0;
                newDomainsArray = [
                    action.newDomain,
                    ...state.uniqueDomains
                ];
            } else {
                newSelectedIndex = newDomainIndex;
                newDomainsArray = state.uniqueDomains;
            }
            return {
                ...state,
                uniqueDomains: newDomainsArray,
                selectedDomainIndex: newSelectedIndex
            };

        default:
            return state;
    }
};

export default domainsReducer;
