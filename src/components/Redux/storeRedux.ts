import {combineReducers, legacy_createStore} from "redux";
import {postReducer, ProfilePageType} from "./reducers/postReducer";
import {MessagePageType, messageReducer} from "./reducers/messageReducer";

export type StateType = {
    ProfilePage: ProfilePageType
    MessagePage: MessagePageType
}
let rootReducer = combineReducers({
       ProfilePage: postReducer,
       MessagePage: messageReducer
    })

export let store = legacy_createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>

