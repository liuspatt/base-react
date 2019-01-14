// ===================
// Urls file
// ===================

import React from 'react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// ===================
// Import pages 
// ===================

import List from './controllers/list';
import Redux_data from './controllers/redux_data';



// ===================
// Create router
// ===================

const AppRouter = () => (
    <Router>
      <div>
        <Route path="/" exact component={List} />
        <Route path="/redux/" component={Redux_data} />
      </div>
    </Router>
);

  export default AppRouter;