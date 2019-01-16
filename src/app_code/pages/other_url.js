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
                <div className="content">
                    <div className="block">
                        <div className="track">
                            <p>Track page</p>
                            <ul>
                                <li>/src/app_code/url.js <span>Define the url and load the controller</span></li>
                                <li>/src/app_code/controllers/other_url.js <span>Consume the api and send the data to page</span></li>
                                <li>/src/app_code/page/other_url.js <span>Render the html (this page use base for header)</span></li>
                            </ul>
                        </div>
                        <h2>Just other Url </h2>
                    </div>
                </div>
                
            </_base>
        );
    }
}

// formz 
export default Page;
