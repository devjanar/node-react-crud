import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store'
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-quill/dist/quill.snow.css';
import './App.css'

import 'bootstrap/dist/js/bootstrap.bundle.min';



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);