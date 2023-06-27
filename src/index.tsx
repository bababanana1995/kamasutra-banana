import React from 'react';
import './index.css';
import {StateType, store} from "./components/Redux/State";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export let rerenderEntireTree = (state:StateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App updateNewPostText={store.updateNewPostText.bind(store)} addMessage={store.addMessage.bind(store)} addPosts={store.addPosts.bind(store)} state={state}/>
        </BrowserRouter>,
        document.getElementById('root')
    );


}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)
