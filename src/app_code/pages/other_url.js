import React, {Component} from 'react';
import _base from './_base';

import logo from './../../static_files/images/logo.svg';
import './../../static_files/css/app.css';
import my_class_app from '../models/my_app';

class Page extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <_base>
                <div className="App">
                    <h2>Just other Url </h2>
                </div>
            </_base>
        );
    }
}

// formz 
export default Page;
