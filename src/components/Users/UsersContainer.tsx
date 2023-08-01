import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppRootStateType} from "../Redux/storeRedux";
import {followUnfollowAC, setUsersAC, UserType} from "../Redux/reducers/usersReducer";


type UsersPropsType={
    
}
let mapStateToProps = (state:AppRootStateType) => {
    return {
        usersPage: state.UsersPage,
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        onChangeFollow: (userID:string) => {
            dispatch(followUnfollowAC(userID))
        },
         setUsers:(users:UserType[])=>{
            dispatch(setUsersAC(users))
         }
    }
}
export const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users)
