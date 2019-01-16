// ===================
// Urls file
// ===================

import React from 'react'

import {BrowserRouter as Router, Route} from "react-router-dom";

// ===================
// Import pages 
// ===================

import List from './controllers/list';
import Redux_data from './controllers/redux_data';
import Other_url from './controllers/other_url';


// ===================
// Create router
// ===================

const AppRouter = () => (
    <Router>
        <div>
            <Route path="/" exact component={List}/>
            <Route path="/redux/" component={Redux_data}/>
            <Route path="/other_url/" component={Other_url}/>
        </div>
    </Router>
);

export default AppRouter;