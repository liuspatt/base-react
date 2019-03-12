import React, {Component} from 'react';
import UrlsComponent from './url';
import {StoreProvider} from './hooks/main_store';
import '../static_files/css/app.css';


class AppRoot extends Component {

    render() {
        return (
            <StoreProvider>
                <UrlsComponent></UrlsComponent>
            </StoreProvider>
        )
    }
}

export default AppRoot;
