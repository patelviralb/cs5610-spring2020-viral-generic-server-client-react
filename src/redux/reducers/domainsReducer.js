import {GET_UNIQUE_DOMAINS} from '../actions/domainsActions'

const initialState = {
    uniqueDomains: []
};

const domainsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_UNIQUE_DOMAINS:
            return {
                ...state,
                uniqueDomains: action.uniqueDomains
            };

        default:
            return state;
    }
};

export default domainsReducer;
