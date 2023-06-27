import React from 'react'
import s from './Dialogs.module.css'
import {NameUsers} from "./DialogsName/DialogsName";
import {MyMessages} from "./MyMessages/MyMessages";
import {StateType} from "../Redux/State";

type DialogsType={
    stateMessage:StateType
    addMessage:(textMessage:string)=>void
}
export const Dialogs = (props:DialogsType) => {

    return (
        <div className={s.dialogs}>
            <NameUsers stateMessageUser={props.stateMessage}/>
            <MyMessages addMessage={props.addMessage} stateMessageMess={props.stateMessage}/>
        </div>

    )
}


