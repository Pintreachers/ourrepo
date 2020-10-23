
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { mainReducer } from "./store/reducers/index";
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';

const store = createStore(mainReducer, applyMiddleware(thunk));
const store = createStore(mainReducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
<Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root')
