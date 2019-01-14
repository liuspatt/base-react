import React, { Component } from 'react';
import PageHtml from './../pages/redux_data';
import { connect } from 'react-redux'
import my_class_app from '../models/my_app';

class Controller extends Component {
    constructor(props){
        super(props); 
        
        this.props.dispatch({
            type: 'SET_VALUE',
            payload: {
              item:"some_value"
            }
        });
        this.props.dispatch({
            type: 'SET_CAR',
            payload: 
              "nice_CAR"            
        });
        
    }
    
    componentDidMount=async ()=>{
        const cats = await my_class_app.getCats();
        console.log(cats);
        // Save data in redux for the redux data page 
        this.props.dispatch({
            type: 'SET_CAT_LIST',
            payload:{list:cats} 
        });

	}
	render(){
        console.log(this.props);
		return (
            <PageHtml
                cats={this.props.cats}
			/>
		)
	}
}

const mapStateToProps = (props, state) => {
    console.log(props);
    // console.log(state);
	return {
        cats: props.cats.list,
        value: props.reducer_values,
	}
}

export default connect(mapStateToProps)(Controller);
// export default Controller;
