import {combineReducers} from "redux";
import usersReducer from "./usersReducer";
import domainsReducer from './domainsReducer';

export default combineReducers({
    users: usersReducer,
    domains: domainsReducer
})
