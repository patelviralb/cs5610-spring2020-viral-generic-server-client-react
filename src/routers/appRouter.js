import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "../components/home";

const AppRouter = () =>
    <BrowserRouter>
        <Switch>
            <Route
                path="/home"
                component={Home}
            />

            <Route
                path="*"
                render={() =>
                    <Redirect to="/home" />
                }
            />
        </Switch>
    </BrowserRouter>;

export default AppRouter;
