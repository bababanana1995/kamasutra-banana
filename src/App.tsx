import React from 'react';
import './App.css';

import {Route} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {Music} from "./components/Music/Music";
import {Navigation} from "./components/Nav/Navigation";
import {PhotosBlock} from "./components/Fotos/PhotosBlock";
import {Settings} from "./components/Settings/Settings";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {AppRootStateType} from "./components/Redux/storeRedux";
import {SuperDialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppType = {
    // state: AppRootStateType
    // dispatch:any
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

                    <Route path='/Profile' render={() => <Profile/>}/>
                    <Route path='/Dialogs' render={() => <SuperDialogsContainer/>}/>

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
