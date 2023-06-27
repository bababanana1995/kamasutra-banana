import React from 'react'
import s from '../Dialogs.module.css'
import {Message} from "./MyMessage/Message";
import {StateType} from "../../Redux/State";

type MessagesType = {
    stateMessageMess: StateType
    addMessage:(textMessage:string)=>void
}
export const MyMessages: React.FC<MessagesType> = (props) => {
    let stateMassage = React.createRef<HTMLInputElement>()
    const addMessage = () => {
        let textMessage = stateMassage.current
        textMessage && props.addMessage(textMessage.value)
        stateMassage.current && (stateMassage.current.value = '')
    }
    let messageElement = props.stateMessageMess.MessagePage.MessageData.map(mess => <Message key={mess.id} message={mess.message}/>)
    return <div className={s.messages}>
            <input ref={stateMassage} type="text"/>
            <button onClick={addMessage}>жмульк</button>
            {messageElement}
        </div>
}




