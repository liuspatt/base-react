import React, {Component} from 'react';
import PageHtml from './../pages/list';
// import { connect } from 'react-redux';
import my_class_app from '../models/my_app';

class Controller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: []
        };
    }

    componentDidMount = async () => {
        const cats = await my_class_app.getCats();
        this.setState({cats: cats});
        console.log(this.state.cats);
    }

    render() {
        console.log(this.state.cats);
        return (
            <div>
                <PageHtml
                    cats={this.state.cats}
                />

            </div>
        )
    }
}

export default Controller;
