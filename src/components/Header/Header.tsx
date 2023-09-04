import React from 'react'
import s from './header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType ={
    login: string
    isAuth: boolean
}
export const Header = (props:HeaderPropsType) => {
    return (
        <div className={s.header}>
            {props.isAuth? props.login : <NavLink to={'/Login'}>Login</NavLink>}

        </div>
    )
}
