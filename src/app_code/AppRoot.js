import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {persistor, store} from './libs/redux/store'
import {PersistGate} from 'redux-persist/integration/react'
import UrlsComponent from './url';

import '../static_files/css/app.css';


class AppRoot extends Component {

    render() {
        return (
            <Provider store={store}>
                {/* <PersistGate loading={<Loading/>} persistor={persistor}> */}

                <PersistGate persistor={persistor}>
                    <UrlsComponent/>
                </PersistGate>
            </Provider>
        )
    }
}

export default AppRoot;
