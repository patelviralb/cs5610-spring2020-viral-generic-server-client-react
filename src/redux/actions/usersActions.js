export const GET_UNIQUE_USERS = "GET_UNIQUE_USERS";
export const UPDATE_SELECTED_USER_INDEX = "UPDATE_SELECTED_USER_INDEX";

const getUniqueUsers = (users) => ({
    type: GET_UNIQUE_USERS,
    uniqueUsers: users
});

const updateSelectedUserIndex = (index) => ({
    type: UPDATE_SELECTED_USER_INDEX,
    selectedUserIndex: index
});

export default {
    getUniqueUsers,
    updateSelectedUserIndex
};
