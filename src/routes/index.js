import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import NewProduct from '../pages/New Product';
import ViewAll from '../pages/All Products';
import NewOrder from '../pages/New Order'
import AllOrders from '../pages/All Orders';

export default function index() {
    return(
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Dashboard} />
            <Route path="/newproduct" exact component={NewProduct} />
            <Route path="/allproducts" exact component={ViewAll} />
            <Route path="/neworder" exact component={NewOrder} />
            <Route path="/allorders" exact component={AllOrders} />
        </Switch>
    )
}