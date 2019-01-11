import React from "react";
import ReactDOM from "react-dom";
import App from "./componentes/App";
import Auth from './Auth';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

const auth = new Auth();

let state = {};

window.setState = (changes) => {
    state = Object.assign({},state, changes);
    ReactDOM.render(<App {...state}/>, document.getElementById('root'));
};

/* eslint no-restricted-globals: 0*/

let username = auth.getProfile().name || "User";
localStorage.setItem("user_name",username)

let initialState = {
    name: username,
    location: location.pathname.replace(/^\/?|\/$/g, ""),
    auth
}

window.setState(initialState);
