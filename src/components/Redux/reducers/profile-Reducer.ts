import {v1} from "uuid";
import Post from "../../Profile/MyPosts/MyPost/Post";

type AddPostActionType = ReturnType<typeof AddPostAC>
type UpdateNewMessageTextActionType = ReturnType<typeof updateNewPostTextAC>
type SetUserProfileActionType = ReturnType<typeof setUserProfileAC>
export type ActionPostType = AddPostActionType | UpdateNewMessageTextActionType | SetUserProfileActionType
export type PostDataType = {
    id: string
    name: string
    post: string
    likes: number
}
export type ProfileType = {
    userId: string
    aboutMe:string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}
let initialState: ProfilePageType = {
    profile:{
        userId: '',
        aboutMe:'',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: '',
        }},
    PostData: [
        {id: v1(), name: 'Danya', post: 'i am here', likes: 10},
        {id: v1(), name: 'Toma', post: 'i am been here', likes: 50},
        {id: v1(), name: 'Dima', post: 'i am not here', likes: 20},
    ],
    NewPostText: ''
}
export type ProfilePageType = {
    profile: ProfileType
    PostData: PostDataType[]
    NewPostText: string
}
export const profileReducer = (state: ProfilePageType = initialState, action: ActionPostType) => {

    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostDataType = {id: v1(), name: 'Danya', post: state.NewPostText, likes: 0}
            return {...state, PostData: [newPost, ...state.PostData], NewPostText: ''}
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {...state, NewPostText: action.newText}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
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
export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}
