import React, {Component} from 'react';

import {Route, Link, withRouter} from "react-router-dom";
import {browserHistory} from 'history'
import logo from './../../static_files/images/logo.svg';
import {connect} from 'react-redux'

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
                <div className="header">
                    <img className="logo" src={logo}></img>
                    <h1>
                        Base<span>React</span>
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
                                <button onClick={this.linkWithCode}>Btn code</button>
                            </li>
                        </ul>
                    </nav>
                </div>
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

