const API_URL = "https://wbdv-generic-server.herokuapp.com/";
let errorMessage = {
    responseCode: null,
    responseData: {}
};

export const findAllUsers = () =>
    fetch(`${API_URL}`).then(response => {
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
