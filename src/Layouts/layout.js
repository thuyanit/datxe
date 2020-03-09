import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginScreen from '../Screens/Login/login';

import {createBrowserHistory} from "history";
import HomeComponent from '../Screens/Home/home';
export const history = createBrowserHistory();

const MainLayout = () => {
    return (
        <BrowserRouter>
            <Route history ={history}>
                <Switch>
                    <Route path="/login" component={LoginScreen}/>
                    <Route path="/" component={HomeComponent}/>
                </Switch>
            </Route>
        </BrowserRouter>
    );
}

export default MainLayout;
