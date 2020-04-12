export const GET_DOMAIN_DATA = "GET_DOMAIN_DATA";

const getDomainData = (domainData) => ({
    type: GET_DOMAIN_DATA,
    domainData: domainData
});

export default {
    getDomainData
};
