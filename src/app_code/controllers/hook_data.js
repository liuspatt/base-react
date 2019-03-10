import React, {Component} from 'react';
import PageHtml from '../pages/hook_data';
import m_api from '../models/my_app';
import {Store} from '../hooks/main_store';

function Controller(){
    const { state, dispatch } = React.useContext(Store);

    React.useEffect(() => {
        state.list_cats.length === 0 && m_api.updateDataAction(dispatch);
    }, [state]);

    const props = {
        list_cats: state.list_cats,
        state: { state, dispatch },
        // toggleFavAction,
        // favourites: state.favourites
    };


    return (
        <PageHtml
            // reload={this.reload}
            cats={props.list_cats}

        />
    );
}
// class Controller extends Component {
//
//
//     constructor(props) {
//         super(props);
//         console.log("hi");
//         const { state, dispatch } = React.useContext(Store);
//     }
//
//     componentDidMount = async () => {
//         console.log("hi");
//         // Save data in redux for the redux data page
//     }
//
//     reload = async () => {
//         console.log("hi");
//         // Save data in redux for the redux data page
//     }
//
//     render() {
//         return (
//             <PageHtml
//                 reload={this.reload}
//                 cats={this.state.list_cats}
//
//             />
//         )
//     }
// }



export default Controller;
// export default Controller;
