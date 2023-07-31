import {v1} from "uuid";
// import {MessageActionType, messageReducer} from "./reducers/messageReducer";
// import {postReducer} from "./reducers/postReducer";
//
// export type PostDataType = {
//     id: string
//     name: string
//     post: string
//     likes: number
// }
// export type MessageType = {
//     id: string
//     message: string
// }
// export type DialogsDataType = {
//     id: string
//     name: string
// }
// export type ProfilePageType = {
//     PostData: PostDataType[]
//     NewPostText: string
// }
// export type MessagePageType = {
//     MessageData: MessageType[]
//     DialogsData: DialogsDataType[]
//     newMessageText: string
// }
// export type StateType = {
//     ProfilePage: ProfilePageType
//     MessagePage: MessagePageType
// }
//
//
// export type StoreType = {
//     _state: StateType
//     getState: () => StateType
//     _callSubscriber: (state: StateType) => void,
//     subscribe: (observer: (state: StateType) => void) => void
//     dispatch: (action:any) => void
// }
// export let store: StoreType = {
//     _state: {
//         ProfilePage: {
//             PostData: [
//                 {id: v1(), name: 'Danya', post: 'i am here', likes: 10},
//                 {id: v1(), name: 'Toma', post: 'i am been here', likes: 50},
//                 {id: v1(), name: 'Dima', post: 'i am not here', likes: 20},
//             ],
//             NewPostText: ''
//         },
//         MessagePage: {
//             MessageData: [
//                 {id: v1(), message: 'hi'},
//                 {id: v1(), message: 'How are you?'},
//                 {id: v1(), message: 'All right'},
//                 {id: v1(), message: 'May be see'},
//                 {id: v1(), message: 'By by'},
//             ],
//             DialogsData: [
//                 {id: v1(), name: 'Danil'},
//                 {id: v1(), name: 'Dima'},
//                 {id: v1(), name: 'Toma'},
//                 {id: v1(), name: 'Sasha'},
//                 {id: v1(), name: 'Jenya'},
//                 {id: v1(), name: 'Petr'},
//                 {id: v1(), name: 'Svytoslav'}
//             ],
//             newMessageText: ''
//         }
//     },
//     getState() {
//         return this._state
//     },
//     _callSubscriber(state) {
//     },
//
//     subscribe(observer: (state: StateType) => void) {
//
//         this._callSubscriber = observer /// это патерн!!!!
//     },
//     dispatch(action) {
//         messageReducer(this._state.MessagePage,action)
//         postReducer(this._state.ProfilePage,action)
//         this._callSubscriber(this._state);
//     }
// }
//
// export const subscribe = (observer:(state: StateType)=>void)=>{
//
//     // rerenderEntireTree = observer /// это патерн!!!!
// }
