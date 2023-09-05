type FollowUnfollowType = ReturnType<typeof followUnfollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>
type ToggleLoaderUserActionType = ReturnType<typeof toggleLoaderUserAC>
export type ActionPostType =
    | FollowUnfollowType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleLoaderUserActionType
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
    pageSize: number
    totalUsersCount: number
    currentPage: number,
    isFetching: boolean
}

let initialState: UsersType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 30,
    isFetching: false
}

export const userReducer = (state: UsersType = initialState, action: ActionPostType): UsersType => {

    switch (action.type) {
        case "FOLLOW-UNFOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)}
        }
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }
        case "TOGGLE-USER": {
            return {...state, isFetching: action.isFetching}
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
export const toggleLoaderUserAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-USER',
        isFetching
    } as const
}
