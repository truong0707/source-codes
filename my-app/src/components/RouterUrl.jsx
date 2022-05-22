import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './login/Login';  
import ShowView from './showView/ShowView';
import RouterWatch from './RouterWatch';
export default function RouterUrl() {
    return (
        <Router>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/ShowView" component={ShowView}/>
            <RouterWatch/>
        </Router>
    )
}
