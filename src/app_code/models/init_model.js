import React from 'react';
import m_api from './my_app';
import {Store} from '../hooks/main_store';

function Controller() {
    const {state, dispatch} = React.useContext(Store);
   
    React.useEffect(() => {
        if(!m_api.set_dispatch()){
            m_api.set_dispatch(dispatch)
        }
        console.log("set dispatch");
        console.log(state);
    }, [state]);



    return (
        <React.Fragment></React.Fragment>
    );
}

export default Controller;

