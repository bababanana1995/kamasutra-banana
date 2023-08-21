import {v1} from "uuid";
import Post from "../../Profile/MyPosts/MyPost/Post";

type FollowUnfollowType = ReturnType<typeof followUnfollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>
type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>
export type ActionPostType = FollowUnfollowType | SetUsersActionType | setCurrentPageActionType | setTotalUsersCountActionType
type Location = {
    country: string
    city: string
}
export type UserType = {
    id: string
    name: string
    status: string
    photos: {
        small: string,
        large: string
    }
    comment: string
    followed: boolean
    // location: Location
}
export type UsersType = {
    users: UserType[]
    pageSize:number
    totalUsersCount:number
    currentPage:number
}

let initialState: UsersType = {
    // users: [
    //     {id: v1(),ava:'https://sun6-22.userapi.com/s/v1/if1/lisZ84X2jtluYVwToJ2AiBd_9roDLRNxPSiS6D1ZruvmfCO2NUgGOVgzEDaie6qkziWlaA.jpg?size=1272x1287&quality=96&crop=57,22,1272,1287&ava=1',
    //         fullName: 'Danya', comment: 'i am here',location:{country:'Russia',city:'Omsk'}, follow: true},
    //     {id: v1(),ava:'https://sun6-22.userapi.com/s/v1/if1/lisZ84X2jtluYVwToJ2AiBd_9roDLRNxPSiS6D1ZruvmfCO2NUgGOVgzEDaie6qkziWlaA.jpg?size=1272x1287&quality=96&crop=57,22,1272,1287&ava=1',
    //         fullName: 'Toma', comment: 'i am been here',location:{country:'Russia',city:'Moscow'}, follow: false},
    //     {id: v1(),ava:'https://sun6-22.userapi.com/s/v1/if1/lisZ84X2jtluYVwToJ2AiBd_9roDLRNxPSiS6D1ZruvmfCO2NUgGOVgzEDaie6qkziWlaA.jpg?size=1272x1287&quality=96&crop=57,22,1272,1287&ava=1',
    //         fullName: 'Dima', comment: 'i am not here',location:{country:'Belarus',city:'Minsk'}, follow: true},
    // ],
    users: [],
    pageSize:10,
    totalUsersCount:0,
    currentPage:1
    // NewPostText: ''
}

export const userReducer = (state: UsersType = initialState, action: ActionPostType): UsersType => {

    switch (action.type) {
        case "FOLLOW-UNFOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)}
        }
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE":{
            return {...state, currentPage:action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT":{
            return  {...state, totalUsersCount:action.totalCount}
        }
        default:
            return state
    }
}

export const followUnfollowAC = (userId: string) => {
    return {
        type: 'FOLLOW-UNFOLLOW',
        userId
    } as const
}
export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalCount
    } as const
}
