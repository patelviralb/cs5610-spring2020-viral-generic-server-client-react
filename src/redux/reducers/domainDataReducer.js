import {GET_DOMAIN_DATA} from '../actions/domainDataActions'

const initialState = {
    domainSpecificData: []
};

const domainsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOMAIN_DATA:
            return {
                ...state,
                domainSpecificData: action.domainData
            };

        default:
            return state;
    }
};

export default domainsReducer;
