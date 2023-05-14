import React from 'react'
import s from './header.module.css'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.Logo}><img src="https://i.pinimg.com/originals/e8/7a/fb/e87afb485ae35f89aceef01bc65ff1c0.png"></img></div>

            <nav className={s.Nav}>
                <div className={s.item}><NavLink exact activeClassName='is-active' to="/Profile">Profile</NavLink></div>
                <div className={s.item}><NavLink exact activeClassName='is-active' to="/Dialogs">Dialogs</NavLink></div>
                <div className={s.item}><NavLink exact activeClassName='is-active' to="/News">News</NavLink></div>
                <div className={s.item}><NavLink exact activeClassName='is-active' to="/Music">Music</NavLink></div>
                <div className={s.item}><NavLink exact activeClassName='is-active' to="/Settings">Settings</NavLink></div>
            </nav>
        </header>
    )
}
