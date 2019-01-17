// ===================
// Urls file
// ===================

import React from 'react'

import {BrowserRouter, Route ,Switch} from "react-router-dom";

// ===================
// Import pages 
// ===================

import List from './controllers/list';
import Redux_data from './controllers/redux_data';
import Other_url from './controllers/other_url';


const Page404 = ({ location }) => (
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
            <Route path="/redux/" component={Redux_data}/>
            <Route path="/other_url/" component={Other_url}/>
            <Route component={Page404} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;