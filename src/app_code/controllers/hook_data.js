import React, {Component} from 'react';
import PageHtml from '../pages/hook_data';
import my_class_app from '../models/my_app';

class Controller extends Component {
    // constructor(props) {
    //     super(props);

    // }

    componentDidMount = async () => {
        const cats = await my_class_app.getCats();
        console.log(cats);
        // Save data in redux for the redux data page 
    }

    reload = async () => {
        const cats = await my_class_app.getCats();
        console.log(cats);
        // Save data in redux for the redux data page
    }

    render() {
        console.log(this.props);
        return (
            <PageHtml
                reload={this.reload}
                cats={this.props.cats}
            />
        )
    }
}



export default Controller;
// export default Controller;
