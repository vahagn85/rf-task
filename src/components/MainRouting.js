import React from 'react';
import {
    Route,
    Switch
} from "react-router-dom";
import Home from "../containers/Home";
import NotFound from "../containers/NotFound";

const MainRouting = () => {
    return (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route exact component={NotFound}/>
            </Switch>
    );
};

export default MainRouting;