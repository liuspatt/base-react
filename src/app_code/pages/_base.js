import React, {Component} from 'react';

import {Link, withRouter} from "react-router-dom";
import logo from './../../static_files/images/logo.svg';

class Page extends Component {
    // constructor(props) {
    //     super(props);

    // }
    linkWithCode = () => {
        this.props.history.push("/other");
    };

    render() {
        return (
            <div>
                <div className="header">
                    <img alt="logo" className="logo" src={logo}></img>
                    <h1>
                        Base<span>React</span>
                    </h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">List Raw </Link>
                            </li>
                            <li>
                                <Link to="/hook/">Hook</Link>
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


export default withRouter(Page)

