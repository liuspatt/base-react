import React, {Component} from 'react';
import Base from './_base';
import ListCats from './inners/list_cats';
import './../../static_files/css/list_page.css';

class Page extends Component {
    render() {
        return (
            <Base>
                <div className="content">
                    <div className="block">
                        <div className="track">
                            <p>Track page</p>
                            <ul>
                                <li>/src/app_code/url.js <span>Define the url and load the controller</span></li>
                                <li>/src/app_code/controllers/list.js <span>Consume the api and send the data to page</span>
                                </li>
                                <li>/src/app_code/page/list.js <span>Render the html (this page use base for header)</span>
                                </li>
                            </ul>
                        </div>
                        <h2>List cast by api </h2>
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
