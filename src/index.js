import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyA0HEBK43PYcDnSLclIDyq82jYvVrjAmgA",
    authDomain: "trippy-f5dd6.firebaseapp.com",
    databaseURL: "https://trippy-f5dd6.firebaseio.com",
    projectId: "trippy-f5dd6",
    storageBucket: "trippy-f5dd6.appspot.com",
    messagingSenderId: "899131269989"
};
firebase.initializeApp(config);

axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    // Edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
