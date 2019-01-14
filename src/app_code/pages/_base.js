import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './../../static_files/images/logo.svg';
import './../../static_files/css/app.css';

class Page extends Component {
  render() {
    return (
      <div>
        <h1>
          Base react
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">List </Link>
            </li>
            <li>
              <Link to="/redux/">Redux</Link>
            </li>
          </ul>
        </nav>        
        <div>
            {this.props.children}
        </div>        
      </div>
    );
  }
}

export default Page;
