import {combineReducers} from "redux";
import usersReducer from "./usersReducer";
import domainsReducer from './domainsReducer';
import domainDataReducer from './domainDataReducer';

export default combineReducers({
    users: usersReducer,
    domains: domainsReducer,
    domainData: domainDataReducer
})
