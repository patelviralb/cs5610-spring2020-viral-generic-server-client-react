import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "../components/home";
import AllUniqueUsers from "../components/users/usersComponent";
import AllUniqueDomains from "../components/domains/domainsComponent"

const AppRouter = () =>
    <BrowserRouter>
        <Switch>
            <Route
                path="/wam"
                exact={true}
                component={Home}
            />

            <Route
                path="/wam/users"
                exact={true}
                component={AllUniqueUsers}
            />

            <Route
                path="/wam/users/:userNUId"
                exact={true}
                render={(props) =>
                    <AllUniqueDomains {...props} />
                }
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
