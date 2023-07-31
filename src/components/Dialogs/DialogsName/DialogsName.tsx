import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogsDataType} from "../../Redux/reducers/messageReducer";
type NameUsersPropsType = {
    DialogsData: DialogsDataType[]
}
export const NameUsers: React.FC<NameUsersPropsType> = (props) => {
    let dialogsElement = props.DialogsData.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    return (
        <div className={s.name_users}>{dialogsElement}</div>
    )
}
type dialogsDataPropsType = DialogsDataType
const DialogItem = (props:dialogsDataPropsType) => {
    let path = "NameUsers" +  props.id
    return <div className={s.dialogs_content}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
}


