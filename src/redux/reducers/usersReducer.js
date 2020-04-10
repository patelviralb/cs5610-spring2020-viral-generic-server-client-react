import {GET_UNIQUE_USERS} from '../actions/usersActions'

const initialState = {
    uniqueUsers: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_UNIQUE_USERS:
            return {
                ...state,
                uniqueUsers: action.uniqueUsers
            };

        default:
            return state;
    }
};

export default usersReducer;
