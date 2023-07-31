import React, {ChangeEvent} from 'react'
import s from '../Dialogs.module.css'
import {Message} from "./MyMessage/Message";
import {MessageType} from "../../Redux/reducers/messageReducer";

type MessagesType = {
    onChangeText:(messageText:string)=>void
    newMessageText:string
    stateMessageMess:MessageType[]
    onAddMessage:()=>void
}

export const MyMessages: React.FC<MessagesType> = (props) => {
    // let newMessageText = props.stateMessageMess.newMessageText
    const changeTextHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        let messageText = e.currentTarget.value
        props.onChangeText(messageText)
    }
    const addMessage = () => {
        props.onAddMessage()
        // props.dispatch(AddMessageAC())
    }
    let messageElement = props.stateMessageMess.map(mess => <Message key={mess.id} message={mess.message}/>)
    return <div className={s.messages}>
            <input onChange={changeTextHandler} value={props.newMessageText} type="text"/>
            <button onClick={addMessage}>жмульк</button>
            {messageElement}
        </div>
}




