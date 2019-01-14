import React, {Component} from 'react';

import {Route, Link, withRouter} from "react-router-dom";
import {browserHistory} from 'history'
import logo from './../../static_files/images/logo.svg';
import {connect} from 'react-redux'
import './../../static_files/css/app.css';

class Page extends Component {
    constructor(props) {
        super(props);
        
    }
    linkWithCode = () =>{
        this.props.history.push("/other_url");
    };

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
                        <li>
                            <button onClick={this.linkWithCode}>to url by code</button>
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
const mapStateToProps = (props, state) => {
  console.log(props);
  console.log(state);
  return {
      
  }
}


export default withRouter(connect(mapStateToProps)(Page))

