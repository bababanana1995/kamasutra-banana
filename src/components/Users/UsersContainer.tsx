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
    toggleLoaderUserAC,
    UserType
} from "../Redux/reducers/usersReducer";
import {Preloader} from "../common/Preloader";

class UserContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.toggleLoaderUser(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleLoaderUser(false)
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleLoaderUser(true)

        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleLoaderUser(false)

                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> :
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    onChangeFollow={this.props.onChangeFollow}
                    // toggleLoaderUser={this.props.toggleLoaderUser}
                />}
        </>
    }
}
type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchPropsType = {
    onChangeFollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleLoaderUser: (isFetching: boolean) => void
}
type OwnPropsType = {}
export type PropsType = OwnPropsType & MapStateToPropsType & MapDispatchPropsType

let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching
    }
}
export const UsersContainer = connect<MapStateToPropsType, MapDispatchPropsType, OwnPropsType, AppRootStateType>(mapStateToProps,
    {
        onChangeFollow: followUnfollowAC,
        setUsers: setUsersAC,
        setTotalUsersCount: setTotalUsersCountAC,
        setCurrentPage: setCurrentPageAC,
        toggleLoaderUser: toggleLoaderUserAC,
    }
    //@ts-ignore
    )(UserContainer)
