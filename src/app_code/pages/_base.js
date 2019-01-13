import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './../../static_files/images/logo.svg';
import './../../static_files/css/app.css';

class Page extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>
        <body>
            <div>
                {this.props.children}
            </div>
        </body>
      </div>
    );
  }
}

export default Page;
