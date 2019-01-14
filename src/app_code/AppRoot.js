import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {store, persistor} from './libs/redux/store'
import {PersistGate} from 'redux-persist/integration/react'
import UrlsComponent from './urls';



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
