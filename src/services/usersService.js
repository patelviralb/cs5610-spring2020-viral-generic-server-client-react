const API_URL = "http://wbdv-generic-server.herokuapp.com/shh/nuids";
let errorMessage = {
    responseCode: null,
    responseData: {}
};

const findAllUsers = () =>
    fetch(`${API_URL}/`).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            errorMessage.responseCode = response.status;
            errorMessage.responseData = response;

            return errorMessage;
        }
    });

export default {
    findAllUsers
};
