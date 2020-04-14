const API_URL = "https://wbdv-generic-server.herokuapp.com/api";
let errorMessage = {
    responseCode: null,
    responseData: {}
};

const findAllDomainSpecificData = (userNUId, domain) =>
    fetch(`${API_URL}/${userNUId}/${domain}`).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            errorMessage.responseCode = response.status;
            errorMessage.responseData = response;

            return errorMessage;
        }
    });

const saveUpdatedDomainData = (userNUId, domain, domainId, updatedDomainData) =>
    fetch(`${API_URL}/${userNUId}/${domain}/${domainId}`, {
        method: 'PUT',
        body: JSON.stringify(updatedDomainData),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            return response.json()
        } else {
            errorMessage.responseCode = response.status;
            errorMessage.responseData = response;

            return errorMessage
        }
    });

const deleteDomainData = (userNUId, domain, domainId) =>
    fetch(`${API_URL}/${userNUId}/${domain}/${domainId}`, {
        method: 'DELETE'
    }).then(response => {
        if (response.ok) {
            return response.json()
        } else {
            errorMessage.responseCode = response.status;
            errorMessage.responseData = response;

            return errorMessage
        }
    });

const findSpecificDomainData = (userNUId, domain, domainId) =>
    fetch(`${API_URL}/${userNUId}/${domain}/${domainId}`).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            errorMessage.responseCode = response.status;
            errorMessage.responseData = response;

            return errorMessage;
        }
    });

export default {
    findAllDomainSpecificData,
    saveUpdatedDomainData,
    deleteDomainData,
    findSpecificDomainData
};
