export const GET_UNIQUE_DOMAINS = "GET_UNIQUE_DOMAINS";
export const UPDATE_SELECTED_DOMAIN_INDEX = "UPDATE_SELECTED_DOMAIN_INDEX";
export const ADD_NEW_DOMAIN = "ADD_NEW_DOMAIN";

const getUniqueDomains = (userDomains) => ({
    type: GET_UNIQUE_DOMAINS,
    uniqueDomains: userDomains
});

const updateSelectedDomainIndex = (index) => ({
    type: UPDATE_SELECTED_DOMAIN_INDEX,
    selectedDomainIndex: index
});

const addNewDomain = (newDomain) => ({
    type: ADD_NEW_DOMAIN,
    newDomain: newDomain
});

export default {
    getUniqueDomains,
    updateSelectedDomainIndex,
    addNewDomain
};
