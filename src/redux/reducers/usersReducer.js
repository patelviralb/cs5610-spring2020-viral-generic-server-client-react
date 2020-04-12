import {
    GET_UNIQUE_USERS,
    UPDATE_SELECTED_USER_INDEX
} from '../actions/usersActions'

const initialState = {
    uniqueUsers: [],
    selectedUserIndex: -1
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_UNIQUE_USERS:
            return {
                ...state,
                uniqueUsers: action.uniqueUsers
            };

        case UPDATE_SELECTED_USER_INDEX:
            return {
                ...state,
                selectedUserIndex: action.selectedUserIndex
            };

        default:
            return state;
    }
};

export default usersReducer;
