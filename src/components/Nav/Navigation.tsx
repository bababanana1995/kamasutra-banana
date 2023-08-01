import React from 'react';
import s from './Navigation.module.css'
import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className={s.Nav}>
                {/*<img className={s.logo} src="https://img.icons8.com/badges/48/clock.png" alt="clock"/>*/}
            <div>Social Club</div>
            <div className={s.box_item}>
                <div className={s.item}>
                    <img src="https://img.icons8.com/badges/48/home.png" alt="home"/>
                    <NavLink exact activeClassName='is-active' to="/Profile">Profile</NavLink>
                </div>
                <div className={s.item}>
                    <img src="https://img.icons8.com/badges/48/speech-bubble.png" alt="speech-bubble"/>
                    <NavLink exact activeClassName='is-active' to="/Dialogs">Dialogs</NavLink>
                </div>
                <div className={s.item}>
                    <img src="https://img.icons8.com/badges/48/speech-bubble.png" alt="speech-bubble"/>
                    <NavLink exact activeClassName='is-active' to="/Users">Users</NavLink>
                </div>
                <div className={s.item}>
                    <img src="https://img.icons8.com/badges/48/news.png" alt="news"/>
                    <NavLink exact activeClassName='is-active' to="/News">News</NavLink>
                </div>
                <div className={s.item}>
                    <img src="https://img.icons8.com/badges/48/music.png" alt="music"/>
                    <NavLink exact activeClassName='is-active' to="/Music">Music</NavLink>
                </div>
                <div className={s.item}>
                    <img src="https://img.icons8.com/badges/48/settings.png" alt="settings"/>
                    <NavLink exact activeClassName='is-active' to="/Settings">Settings</NavLink>
                </div>

            </div>

        </nav>
    )
}
