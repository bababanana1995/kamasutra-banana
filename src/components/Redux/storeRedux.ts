import {combineReducers, legacy_createStore} from "redux";
import {profileReducer, ProfilePageType} from "./reducers/profile-Reducer";
import {MessagePageType, messageReducer} from "./reducers/messageReducer";
import {userReducer} from "./reducers/usersReducer";
import {authReducer} from "./reducers/auth-Reducer";

let rootReducer = combineReducers({
    ProfilePage: profileReducer,
    MessagePage: messageReducer,
    UsersPage: userReducer,
    Auth:authReducer
})

export let store = legacy_createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store
