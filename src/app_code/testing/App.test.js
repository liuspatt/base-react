import React from 'react';
import ReactDOM from 'react-dom';
import App from '../AppRoot';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
