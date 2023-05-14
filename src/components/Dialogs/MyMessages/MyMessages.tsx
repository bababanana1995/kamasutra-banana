import React from 'react'
import s from '../Dialogs.module.css'
import {Message} from "./MyMessage/MyMessage";

type MessegesType = {
    sms: PropsType[]
}
type PropsType = {
    message: string
}
export const Messages: React.FC<MessegesType> = (props) => {
debugger

    let messageElement = props.sms.map(mess => <Message  message={mess.message}/>)

    return (
        <div className={s.messages}>
            {messageElement}

        </div>
    )
}




