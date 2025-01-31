import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "../components/home";
import AllUniqueUsers from "../components/users/usersComponent";
import AllUniqueDomains from "../components/domains/domainsComponent"
import DomainData from "../components/domainData/domainDataComponent";

const AppRouter = () =>
    <BrowserRouter>
        <Switch>
            <Route
                path="/wam"
                exact={true}
                component={Home}
            />

            <Route
                path="/wam/nuids"
                exact={true}
                component={AllUniqueUsers}
            />

            <Route
                path="/wam/nuids/:userNUId"
                exact={true}
                component={AllUniqueDomains}
            />

            <Route
                path="/wam/nuids/:userNUId/domains/:domain"
                exact={true}
                component={DomainData}
            />

            <Route
                path="/wam/nuids/:userNUId/domains/:domain/:domainId"
                exact={true}
                component={DomainData}
            />

            <Route
                path="*"
                render={() =>
                    <Redirect to="/wam"/>
                }
            />
        </Switch>
    </BrowserRouter>;

export default AppRouter;
