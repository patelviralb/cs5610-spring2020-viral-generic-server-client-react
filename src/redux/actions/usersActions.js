export const GET_UNIQUE_USERS = "GET_UNIQUE_USERS";

const getUniqueUsers = (users) => ({
    type: GET_UNIQUE_USERS,
    uniqueUsers: users
});

export default {
    getUniqueUsers
};
