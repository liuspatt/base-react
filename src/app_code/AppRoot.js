import React, {Component} from 'react';
import UrlsComponent from './url';
import {Store, StoreProvider} from './hooks/main_store';
import '../static_files/css/app.css';

import m_api from "./models/my_app";


// Function to init dispatch model classes
function InitHooksClasses() {
    const {state, dispatch} = React.useContext(Store);
    // Init dispatch for model or models
    React.useEffect(() => {
        if(!m_api.get_dispatch()){m_api.set_dispatch(dispatch)}
    }, [state]);
    return (<React.Fragment></React.Fragment>);
}


class AppRoot extends Component {

    render() {
        return (
            <StoreProvider>
                <InitHooksClasses></InitHooksClasses>
                <UrlsComponent></UrlsComponent>
            </StoreProvider>
        )
    }
}

export default AppRoot;
