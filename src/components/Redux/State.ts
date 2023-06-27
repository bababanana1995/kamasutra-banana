import {v1} from "uuid";
export type PostDataType = {
    id: string
    name: string
    post: string
    likes: number
}
export type MessageType = {
    id:string
    message: string
}
export type DialogsDataType = {
    id: string
    name: string
}

export type ProfilePageType = {
    PostData: PostDataType[]
    NewPostText:string
}
export type MessagePageType = {
    MessageData: MessageType[]
    DialogsData: DialogsDataType[]
}

export type StateType = {
    ProfilePage: ProfilePageType
    MessagePage: MessagePageType

}
export let store = {
    _state : {
        ProfilePage: {
            PostData: [
                {id: v1(), name: 'Danya', post: 'i am here', likes: 10},
                {id: v1(), name: 'Toma', post: 'i am been here', likes: 50},
                {id: v1(), name: 'Dima', post: 'i am not here', likes: 20},
            ],
            NewPostText:''
        },
        MessagePage: {
            MessageData: [
                {id:v1(),message: 'hi'},
                {id:v1(),message: 'How are you?'},
                {id:v1(),message: 'All right'},
                {id:v1(),message: 'May be see'},
                {id:v1(),message: 'By by'},
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
        }

    },
    getState() {
        debugger
        return this._state},
    _callSubscriber(state:StateType){},
   addMessage(textMessage:string){
        const newMessage = {id:v1(),message: textMessage}
        this._state.MessagePage.MessageData.unshift(newMessage)
        this._callSubscriber(this._state);
    },
    addPosts(){
        debugger
        let newPost = {id: v1(), name: 'Danya', post: this._state.ProfilePage.NewPostText, likes: 0}
        // if(textPost.trim().length>10)
        this._state.ProfilePage.PostData.unshift(newPost)
        this._callSubscriber(this._state);
    },
    updateNewPostText(NewText:string){
        this._state.ProfilePage.NewPostText = NewText
        // rerenderEntireTree(state)
    },
    subscribe(observer:(state: StateType)=>void){

        this._callSubscriber = observer /// это патерн!!!!
    },
}
// export const state: StateType = {
//     ProfilePage: {
//         PostData: [
//             {id: v1(), name: 'Danya', post: 'i am here', likes: 10},
//             {id: v1(), name: 'Toma', post: 'i am been here', likes: 50},
//             {id: v1(), name: 'Dima', post: 'i am not here', likes: 20},
//         ],
//         NewPostText:''
//     },
//     MessagePage: {
//         MessageData: [
//             {id:v1(),message: 'hi'},
//             {id:v1(),message: 'How are you?'},
//             {id:v1(),message: 'All right'},
//             {id:v1(),message: 'May be see'},
//             {id:v1(),message: 'By by'},
//         ],
//         DialogsData: [
//             {id: v1(), name: 'Danil'},
//             {id: v1(), name: 'Dima'},
//             {id: v1(), name: 'Toma'},
//             {id: v1(), name: 'Sasha'},
//             {id: v1(), name: 'Jenya'},
//             {id: v1(), name: 'Petr'},
//             {id: v1(), name: 'Svytoslav'}
//         ],
//     }
//
// }
// let rerenderEntireTree = (state:StateType)=>{
//     console.log('But i am here ')
// }
// export const addMessage=(textMessage:string)=>{
//     const newMessage = {id:v1(),message: textMessage}
//     state.MessagePage.MessageData.unshift(newMessage)
//     rerenderEntireTree(state);
// }
// export const addPosts=()=>{
//     let newPost = {id: v1(), name: 'Danya', post: state.ProfilePage.NewPostText, likes: 0}
//     // if(textPost.trim().length>10)
//     state.ProfilePage.PostData.unshift(newPost)
//     rerenderEntireTree(state);
// }
// export const updateNewPostText = (NewText:string)=>{
//     state.ProfilePage.NewPostText = NewText
//     // rerenderEntireTree(state)
// }

// export const subscribe = (observer:(state: StateType)=>void)=>{
//
//     rerenderEntireTree = observer /// это патерн!!!!
// }
