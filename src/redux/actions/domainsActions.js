export const GET_UNIQUE_DOMAINS = "GET_UNIQUE_DOMAINS";
export const UPDATE_SELECTED_DOMAIN_INDEX = "UPDATE_SELECTED_DOMAIN_INDEX";

const getUniqueDomains = (userDomains) => ({
    type: GET_UNIQUE_DOMAINS,
    uniqueDomains: userDomains
});

const updateSelectedDomainIndex = (index) => ({
    type: UPDATE_SELECTED_DOMAIN_INDEX,
    selectedDomainIndex: index
});

export default {
    getUniqueDomains,
    updateSelectedDomainIndex
};
