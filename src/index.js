import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


//Redux imports
import { Provider } from 'react-redux'
import {store} from './redux/store/index'
import {persistor} from './redux/store/index'
import { PersistGate } from 'redux-persist/integration/react'



ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>, document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
