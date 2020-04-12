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

export default {
    findAllDomainSpecificData
};
