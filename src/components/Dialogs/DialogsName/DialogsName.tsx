// @ts-ignore

import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


type NameUsersPropsType = {
    name: PropsType[]
}
type PropsType = {
    id:number,
    name:string
}
export const NameUsers: React.FC<NameUsersPropsType> = (props) => {

    let dialogsElement = props.name.map(el => <DialogItem name={el.name} id={el.id}/>)


    return (
        <div className={s.name_users}>{dialogsElement}</div>
    )
}
type dialogsDataPropsType ={
    id:number;
    name:string;
}
const DialogItem = (props:dialogsDataPropsType) => {
    let path = "NameUsers" +  props.id
    return (
        <div className={s.dialogs_content}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


