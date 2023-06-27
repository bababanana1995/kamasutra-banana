import React from 'react';
import './App.css';

import {BrowserRouter, Route} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {Music} from "./components/Music/Music";
import {Navigation} from "./components/Nav/Navigation";
import {PhotosBlock} from "./components/Fotos/PhotosBlock";
import {Settings} from "./components/Settings/Settings";
import {StateType} from "./components/Redux/State";
import {Dialogs} from "./components/Dialogs/Dialogs";

type AppType = {
    state: StateType
    addPosts: () => void
    addMessage:(textMessage:string)=>void
    updateNewPostText:(NewText:string)=>void
}

function App(props: AppType) {

    return (
        <div className="App">
            <div className="app-wrapper">
                <div className='app-wrapper-navigation'>
                    <Navigation/>
                </div>
                <div className="app-wrapper-content">
                    <Route path='/Music' component={Music}/>
                    <Route path='/Profile' component={() => <Profile updateNewPostText={props.updateNewPostText} stateProfile={props.state} addPosts={props.addPosts}/>}/>
                    <Route path='/Dialogs' render={() => <Dialogs stateMessage={props.state} addMessage={props.addMessage}/>}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>
                </div>
                <div className='app-wrapper-Photos-block'>
                    <PhotosBlock/>
                </div>
            </div>
        </div>
    );
}


export default App;
