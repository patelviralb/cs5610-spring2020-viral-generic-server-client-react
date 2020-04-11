export const GET_UNIQUE_DOMAINS = "GET_UNIQUE_DOMAINS";

const getUniqueDomains = (userDomains) => ({
    type: GET_UNIQUE_DOMAINS,
    uniqueDomains: userDomains
});

export default {
    getUniqueDomains
};
