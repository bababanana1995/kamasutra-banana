import React from 'react';
import './App.css';

import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {Navigation} from "./components/Nav/Navigation";
import {Settings} from "./components/Settings/Settings";
import {SuperDialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

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
                    {/*@ts-ignore*/}
                    <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/Dialogs' render={() => <SuperDialogsContainer/>}/>
                    {/*@ts-ignore*/}

                    <Route  path='/Users' render={() => <UsersContainer />}/>

                    <Route path='/Music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>
                </div>
                <div className='app-wrapper-Photos-block'>
                    {/*@ts-ignore*/}
                    <HeaderContainer/>
                </div>
            </div>
        </div>
    );
}


export default App;
