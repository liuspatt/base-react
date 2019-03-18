import React from 'react';
import m_api from './my_app';
import {Store} from '../hooks/main_store';

function Controller() {
    const {state, dispatch} = React.useContext(Store);
   
    // Init dispatch for model or models 
    React.useEffect(() => {
        if(!m_api.get_dispatch()){
            m_api.set_dispatch(dispatch)
        }
    }, [state]);

    return (
        <React.Fragment></React.Fragment>
    );
}

export default Controller;

