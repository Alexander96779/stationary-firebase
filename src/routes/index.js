import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import NewProduct from '../pages/New Product';

export default function index() {
    return(
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Dashboard} />
            <Route path="/newproduct" exact component={NewProduct} />
        </Switch>
    )
}