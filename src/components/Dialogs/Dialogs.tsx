import React from 'react'
import s from './Dialogs.module.css'
import {NameUsers} from "./DialogsName/DialogsName";
import {MyMessages} from "./MyMessages/MyMessages";
import {MessagePageType} from "../Redux/reducers/messageReducer";

type DialogsType={
    onChangeText:(messageText:string)=>void
    onAddMessage:()=>void
    state:MessagePageType
}
export const Dialogs = (props:DialogsType) => {
    let DialogsData = props.state.DialogsData
    let newMessageText= props.state.newMessageText
    let stateMessageMess = props.state.MessageData

    return (
        <div className={s.dialogs}>
            <NameUsers DialogsData={DialogsData}/>
            <MyMessages onChangeText={props.onChangeText} onAddMessage={props.onAddMessage} newMessageText={newMessageText} stateMessageMess={stateMessageMess} />
        </div>

    )
}


