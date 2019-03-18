import React, {Component} from 'react';
import Base from './_base';
import ListCats from './inners/list_cats';
import './../../static_files/css/list_page.css';

class Page extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Base>
                <div className="content">
                    <div className="block">
                        <div className="track">
                            <p>Track page</p>
                            <ul>
                                <li>/src/app_code/url.js <span>Define the url and load the controller</span></li>
                                <li>/src/app_code/controllers/redux_data.js <span>Consume the api and send the data to page</span>
                                </li>
                                <li>/src/app_code/page/redux_data.js <span>Render the html (this page use base for header)</span>
                                </li>
                            </ul>
                            <p>Redux</p>
                            <ul>
                                <li>/src/app_code/controllers/redux_data.js:13 <span>Load data from api and class/model.</span>
                                </li>
                                <li>/src/app_code/controllers/redux_data.js:16 <span>Save data to redux.</span></li>
                                <li>/src/app_code/controllers/redux_data.js:33 <span>Map redux into controller.</span>
                                </li>
                            </ul>
                        </div>
                        <button onClick={this.props.reload}>reload </button>
                        <h2>List cast by api with redux</h2>
                        <ListCats
                            list_cats={this.props.cats}
                        ></ListCats>
                    </div>
                </div>
            </Base>
        );
    }
}

// formz 
export default Page;
