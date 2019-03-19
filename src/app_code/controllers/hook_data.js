import React from 'react';
import PageHtml from '../pages/hook_data';
import m_api from '../models/my_app';
import {Store} from '../hooks/main_store';

function Controller() {
    const {state, dispatch} = React.useContext(Store);

    React.useEffect(() => {
        // only run one time
        if(state.list_cats.length === 0){
            m_api.updateDataAction();
        }
    }, [state]);

    const reload = () => { 
        m_api.updateDataAction();
    }
    const props = {
        list_cats: state.list_cats,
        state: {state, dispatch},
        // toggleFavAction,
        // favourites: state.favourites
    };

    return (
        <PageHtml
            showReload = {true}
            reload = {reload}
            cats   = {props.list_cats}
        />
    );
}

export default Controller;

