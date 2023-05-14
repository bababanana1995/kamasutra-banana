import React from 'react';
import './App.css';

import {BrowserRouter, Route} from "react-router-dom";
import {Footer} from "./components/Footer/Footer";
import {Profile} from "./components/Profile/Profile";
import {Music} from "./components/Music/Music";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Navigation} from "./components/Nav/Navigation";
import {PhotosBlock} from "./components/Fotos/PhotosBlock";

function App(props: any) {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="app-wrapper">
                    <div className='app-wrapper-navigation'>
                        <Navigation/>
                    </div>
                    <div className="app-wrapper-content">
                        <Route path='/Profile' component={Profile}/>
                        <Route path='/Dialogs' component={Dialogs}/>
                        <Route path='/Music' component={Music}/>
                        {/*      <Route path='/Settings/*' element={<Settings/>}/>*/}
                    </div>
                    <div className='app-wrapper-Photos-block'>
                        <PhotosBlock/>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
