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
                                <li>/src/app_code/controllers/redux_data.js <span>Consume the api and send the data to page</span></li>
                                <li>/src/app_code/page/redux_data.js <span>Render the html (this page use base for header)</span></li>
                            </ul>
                            <p>Redux</p>
                            <li>/src/app_code/controllers/redux_data.js:13 <span>Load data from api and class/model.</span></li>
                            <li>/src/app_code/controllers/redux_data.js:16 <span>Save data to redux.</span></li>
                            <li>/src/app_code/controllers/redux_data.js:33 <span>Map redux into controller.</span></li>
                        </div>
                        <h2>List cast by api with redux</h2>
                        {
                            this.props.cats.map((item) => {
                                return (
                                    <div className="item">
                                        <h3>{item.id}</h3>
                                        <img src={item.url}></img>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </_base>
        );
    }
}

// formz 
export default Page;
