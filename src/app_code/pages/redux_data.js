import React, { Component } from 'react';
import _base from './_base';

import logo from './../../static_files/images/logo.svg';
import './../../static_files/css/app.css';
import my_class_app from '../models/my_app';
class Page extends Component {
  constructor(props){
    super(props);
  }
  render(){ 
    return (
      <_base>
        <div className="App">
          <h2>List cast by api with redux</h2>
          {
            this.props.cats.map((item) => {
              return(
                <div>
                    <h3>{item.id}</h3>
                    <img src={item.url} ></img>
                </div>
              )
            })
          }
        </div>
      </_base>
    );
  }
}

// formz 
export default Page;
