// ===================
// Urls file
// ===================

import React from 'react'

import {BrowserRouter, Route, Switch} from "react-router-dom";
import List from './controllers/list';
import Hook_data from './controllers/hook_data';
import Other_url from './controllers/other_url';

// ===================
// Import pages 
// ===================


const Page404 = ({location}) => (
    <div>
        <h2>No match found for <code>{location.pathname}</code></h2>
    </div>
);


// ===================
// Create router
// ===================

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={List}/>
            <Route path="/hook/" component={Hook_data}/>
            <Route path="/other/" component={Other_url}/>
            <Route component={Page404}/>
        </Switch>
    </BrowserRouter>
);

export default AppRouter;