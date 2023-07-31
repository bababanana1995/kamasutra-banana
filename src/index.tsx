import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {AppRootStateType, store} from "./components/Redux/storeRedux";
import {Provider} from "react-redux";

export let rerenderEntireTree = (state:AppRootStateType) => {

    ReactDOM.render(
        <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );


}
rerenderEntireTree(store.getState());

store.subscribe(()=> {
    let state = store.getState()
    rerenderEntireTree(state)
})
