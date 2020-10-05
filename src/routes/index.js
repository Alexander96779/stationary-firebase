import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Sidebar from '../components/Sidebar';

export default function index() {
    return(
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Dashboard} />
            <Route path="/sidebar" exact component={Sidebar} />
        </Switch>
    )
}