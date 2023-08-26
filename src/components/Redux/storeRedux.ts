import {combineReducers, legacy_createStore} from "redux";
import {profileReducer, ProfilePageType} from "./reducers/profile-Reducer";
import {MessagePageType, messageReducer} from "./reducers/messageReducer";
import {userReducer} from "./reducers/usersReducer";

export type StateType = {
    ProfilePage: ProfilePageType
    MessagePage: MessagePageType
}
let rootReducer = combineReducers({
    ProfilePage: profileReducer,
    MessagePage: messageReducer,
    UsersPage: userReducer
})

export let store = legacy_createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>

