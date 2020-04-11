const API_URL = "https://wbdv-generic-server.herokuapp.com/shh/nuids";
let errorMessage = {
    responseCode: null,
    responseData: {}
};

const findAllDomainsForUser = (userNUId) =>
    fetch(`${API_URL}/${userNUId}/domains`).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            errorMessage.responseCode = response.status;
            errorMessage.responseData = response;

            return errorMessage;
        }
    });

export default {
    findAllDomainsForUser
};
