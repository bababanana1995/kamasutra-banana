import React from "react";
import style from "./Users.module.css";
import {UserType} from "../Redux/reducers/usersReducer";


export type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onChangeFollow: (userID: string) => void
    onPageChanged: (pageNumber: number) => void
}
export const Users = (props: UsersPropsType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    // for (let i = 1;  i < 10; i++) {
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }
    let changeFollow = (id: string) => {
        props.onChangeFollow(id)
    }
    return (<div>
            <div className={style.pages}>
                {pages.map(p => {
                    return (
                        <span className={
                            props.currentPage === p
                                ? style.selectedPage
                                : ''
                        }
                              onClick={() => {
                                  props.onPageChanged(p)
                              }}>
                                {p}
                            </span>
                    )
                })}

            </div>
            {/*<button onClick={this.getUsers}>getUsers</button>*/}
            {props.users.map(user => {
                    return <div key={user.id} className={style.userContainer}>
                        <div className={style.avatarBlock}>
                            <div><img
                                src={user.photos.small ? user.photos.small : 'https://sun6-22.userapi.com/s/v1/if1/lisZ84X2jtluYVwToJ2AiBd_9roDLRNxPSiS6D1ZruvmfCO2NUgGOVgzEDaie6qkziWlaA.jpg?size=1272x1287&quality=96&crop=57,22,1272,1287&ava=1'}
                                alt="ava" className={style.userAva}/></div>
                            <button
                                onClick={() => changeFollow(user.id)}>{user.followed ? 'Follow' : 'UnFollow'}</button>
                        </div>
                        <div className={style.userInfoBlock}>
                            <div className={style.userInfoBlockElements}>
                                <div>{user.name}</div>
                                <div>{user.comment}</div>
                            </div>
                            <div className={style.userInfoBlockElements}>
                                {/*<div>Country: {user.location.country?}</div>*/}
                                {/*<div>City: {user.location.city}</div>*/}
                                <div>City: {'Russia'}</div>
                                <div>City: {'Omsk'}</div>
                            </div>
                        </div>
                    </div>
                }
            )}

        </div>
    )
}