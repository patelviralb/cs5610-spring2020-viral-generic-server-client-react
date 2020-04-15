const API_URL = "https://wbdv-generic-server.herokuapp.com";
let errorMessage = {
    responseCode: null,
    responseData: {}
};

const findAllDomainsForUser = (userNUId) =>
    fetch(`${API_URL}/shh/nuids/${userNUId}/domains`).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            errorMessage.responseCode = response.status;
            errorMessage.responseData = response;

            return errorMessage;
        }
    });

const addNewDomain = (userNUId, domainName) =>
    fetch(`${API_URL}/api/${userNUId}/${domainName}`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            errorMessage.responseCode = response.status;
            errorMessage.responseData = response;

            return errorMessage;
        }
    });

export default {
    findAllDomainsForUser,
    addNewDomain
};
