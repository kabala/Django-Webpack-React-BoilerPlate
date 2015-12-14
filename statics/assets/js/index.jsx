import React from 'react';
import App from "./app.jsx";
import 'js-cookie';


// Redux 
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Provider } from "react-redux";

// Redux-api
//import {init as initRest, reducers} from "./utils/rest";
//import adapterFetch from "../../../src/adapters/fetch";
import { polyfill } from "es6-promise";
import "whatwg-fetch";

// Initialize react-api
//initRest(adapterFetch(fetch));

React.render(<App />, document.getElementById('react-app'));