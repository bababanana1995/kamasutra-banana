import {v1} from "uuid";

export type AddMessageActionType = ReturnType<typeof AddMessageAC>

export type UpdateNewMessageTextActionType = ReturnType<typeof UpdateNewMessageTextAC>
export type MessageActionType =
    | AddMessageActionType
    | UpdateNewMessageTextActionType
export type MessageType = {
    id: string
    message: string
}
export type DialogsDataType = {
    id: string
    name: string
}
export type MessagePageType = {
    MessageData: MessageType[]
    DialogsData: DialogsDataType[]
    newMessageText: string
}
let initialState:MessagePageType = {
        MessageData: [
            {id: v1(), message: 'hi'},
            {id: v1(), message: 'How are you?'},
            {id: v1(), message: 'All right'},
            {id: v1(), message: 'May be see'},
            {id: v1(), message: 'By by'},
        ],
        DialogsData: [
            {id: v1(), name: 'Danil'},
            {id: v1(), name: 'Dima'},
            {id: v1(), name: 'Toma'},
            {id: v1(), name: 'Sasha'},
            {id: v1(), name: 'Jenya'},
            {id: v1(), name: 'Petr'},
            {id: v1(), name: 'Svytoslav'}
        ],
        newMessageText: ''
    }

export const messageReducer = (state = initialState, action: MessageActionType) => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            const newMessage: MessageType = {id: v1(), message: state.newMessageText}
            return {...state,MessageData:[newMessage,...state.MessageData],newMessageText:''}
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            return {...state,newMessageText: action.message}
        }
        default:
            return state
    }

}

export const AddMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}
export const UpdateNewMessageTextAC = (message: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        message
    } as const
}
// else
//     if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
//         this._state.MessagePage.newMessageText = action.message
//         this._callSubscriber(this._state);
//     } else if (action.type === 'ADD-MESSAGE') {
//         const newMessage: NewMessageType = {id: v1(), message: this._state.MessagePage.newMessageText}
//         this._state.MessagePage.MessageData.unshift(newMessage)
//         this._callSubscriber(this._state);
//         this._state.MessagePage.newMessageText = ''
//     }
