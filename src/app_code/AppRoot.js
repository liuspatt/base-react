import React, {Component} from 'react';
import UrlsComponent from './url';
import {StoreProvider} from './hooks/main_store';
import '../static_files/css/app.css';
import InitModel from "./models/init_model"

class AppRoot extends Component {

    render() {
        return (
            <StoreProvider>
                <InitModel></InitModel>
                <UrlsComponent></UrlsComponent>
            </StoreProvider>
        )
    }
}

export default AppRoot;
