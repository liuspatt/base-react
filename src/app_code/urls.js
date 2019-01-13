// ===================
// Urls file
// ===================

import React from 'react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// ===================
// Import pages 
// ===================

import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile';


// ===================
// Create router
// ===================

const AppRouter = () => (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Profile} />
      </div>
    </Router>
);

  export default AppRouter;