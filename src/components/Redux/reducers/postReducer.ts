import {v1} from "uuid";

type AddPostActionType = ReturnType<typeof AddPostAC>
type UpdateNewMessageTextActionType = ReturnType<typeof updateNewPostTextAC>
export type ActionPostType = AddPostActionType | UpdateNewMessageTextActionType
export type PostDataType = {
    id: string
    name: string
    post: string
    likes: number
}
let initialState: ProfilePageType ={
    PostData: [
        {id: v1(), name: 'Danya', post: 'i am here', likes: 10},
        {id: v1(), name: 'Toma', post: 'i am been here', likes: 50},
        {id: v1(), name: 'Dima', post: 'i am not here', likes: 20},
    ],
    NewPostText: ''
}
export type ProfilePageType = {
    PostData: PostDataType[]
    NewPostText: string
}
export const postReducer = (state: ProfilePageType = initialState, action: ActionPostType) => {

    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostDataType = {id: v1(), name: 'Danya', post: state.NewPostText, likes: 0}
            state.PostData.unshift(newPost)
            state.NewPostText = ''
            return state
        }
        case "UPDATE-NEW-POST-TEXT": {
            state.NewPostText = action.newText
            return state
        }
        default:
            return state
    }
}

export const AddPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText
    } as const
}
