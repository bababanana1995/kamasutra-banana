import React from 'react'
import s from './Dialogs.module.css'
import {NameUsers} from "./DialogsName/DialogsName";
import {Messages} from "./MyMessages/MyMessages";


export const Dialogs = () => {
    let MessageData = [
        { message: 'hi'},
        { message: 'How are you?'},
        { message: 'All right'},
        { message: 'May be see'},
        { message: 'By by'},
    ]
    let dialogsData = [
        {id: 1, name: 'Danil'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Toma'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Jenya'},
        {id: 6, name: 'Petr'},
        {id: 7, name: 'Svytoslav'}
    ]
    debugger
    return (
        <div className={s.dialogs}>
            <NameUsers name={dialogsData}/>
            <Messages  sms={MessageData}/>
        </div>

    )
}


