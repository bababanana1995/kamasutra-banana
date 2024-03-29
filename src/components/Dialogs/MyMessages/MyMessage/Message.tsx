import React from 'react'
import s from '../../Dialogs.module.css'


type Propstype = {
    message: string
}
export const Message: React.FC<Propstype> = (props) => {

    return (
        <div className={s.message}>{props.message}</div>
    )
}


