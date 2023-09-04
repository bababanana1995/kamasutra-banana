type SetAuthUserType = ReturnType<typeof setAuthUserAC>

export type ActionPostType =
    | SetAuthUserType

export type AuthType = {
    userId: number
    email: string
    login: string
    isAuth:boolean
}

let initialState: AuthType = {
    userId: 0,
    email: '',
    login: '',
    isAuth:false

}

export const authReducer = (state: AuthType = initialState, action: ActionPostType): AuthType => {

    switch (action.type) {
        case "SET_USER_DATA": {
            return {
                ...state,
                ...action.payload,
                isAuth:true
            }
        }
        default:
            return state
    }
}

export const setAuthUserAC = (userId: number, email: string, login: string) => {
    return {
        type: 'SET_USER_DATA',
        payload: {
            userId, email, login
        }

    } as const
}
