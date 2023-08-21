import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../Redux/storeRedux";
import axios from "axios";
import {Users} from "./Users";
import {
    followUnfollowAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    UserType
} from "../Redux/reducers/usersReducer";
class UsersConteiner extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }
    render() {
        return <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            onChangeFollow={this.props.onChangeFollow}
        />
    }
}


type MapStateToPropsType = {
  users:UserType[]
    pageSize:number
    totalUsersCount:number
    currentPage:number
}
type MapDispatchPropsType = {
    onChangeFollow:(userID:string)=>void
    setUsers:(users:UserType[])=>void
    setCurrentPage:(currentPage:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
}
type OwnPropsType = {}
export type PropsType = OwnPropsType&MapStateToPropsType&MapDispatchPropsType

let mapStateToProps = (state:AppRootStateType) => {
    return {
        users: state.UsersPage.users,
        pageSize:state.UsersPage.pageSize,
        totalUsersCount:state.UsersPage.totalUsersCount,
        currentPage:state.UsersPage.currentPage,
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        onChangeFollow: (userID:string) => {
            dispatch(followUnfollowAC(userID))
        },
         setUsers:(users:UserType[])=>{
            dispatch(setUsersAC(users))
         },
        setTotalUsersCount:(totalCount:number)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setCurrentPage:(currentPage:number)=>{
            dispatch(setCurrentPageAC(currentPage))
        }
    }
}
// @ts-ignore
export const UsersContainer=connect<MapStateToPropsType,MapDispatchPropsType,OwnPropsType,AppRootStateType>(mapStateToProps,mapDispatchToProps)(UsersConteiner)
