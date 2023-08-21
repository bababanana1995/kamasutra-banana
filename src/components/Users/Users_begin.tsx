import React from "react";
import {UsersType, UserType} from "../Redux/reducers/usersReducer";
import style from './Users.module.css'
import {v1} from "uuid";
import axios from "axios";

type UsersPropsType = {
    usersPage: UsersType
    onChangeFollow: (id: string) => void
    setUsers: (users: UserType[]) => void
}
export const Users_begin = (props: UsersPropsType) => {
    const {usersPage, setUsers} = props

    const getUsers = () => {
        if (usersPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
                setUsers(res.data.items)
            })
        }
    }
// if(usersPage.users.length ===0) {
//     props.setUsers(
//         [
//             {
//                 id: v1(),
//                 ava: 'https://sun6-22.userapi.com/s/v1/if1/lisZ84X2jtluYVwToJ2AiBd_9roDLRNxPSiS6D1ZruvmfCO2NUgGOVgzEDaie6qkziWlaA.jpg?size=1272x1287&quality=96&crop=57,22,1272,1287&ava=1',
//                 fullName: 'Danya',
//                 comment: 'i am here',
//                 location: {country: 'Russia', city: 'Omsk'},
//                 follow: true
//             },
//             {
//                 id: v1(),
//                 ava: 'https://sun6-22.userapi.com/s/v1/if1/lisZ84X2jtluYVwToJ2AiBd_9roDLRNxPSiS6D1ZruvmfCO2NUgGOVgzEDaie6qkziWlaA.jpg?size=1272x1287&quality=96&crop=57,22,1272,1287&ava=1',
//                 fullName: 'Toma',
//                 comment: 'i am been here',
//                 location: {country: 'Russia', city: 'Moscow'},
//                 follow: false
//             },
//             {
//                 id: v1(),
//                 ava: 'https://sun6-22.userapi.com/s/v1/if1/lisZ84X2jtluYVwToJ2AiBd_9roDLRNxPSiS6D1ZruvmfCO2NUgGOVgzEDaie6qkziWlaA.jpg?size=1272x1287&quality=96&crop=57,22,1272,1287&ava=1',
//                 fullName: 'Dima',
//                 comment: 'i am not here',
//                 location: {country: 'Belarus', city: 'Minsk'},
//                 follow: true
//             },
//         ]
//     )
// }
    const changeFollow = (id: string) => {
        props.onChangeFollow(id)
    }

    return (<div>
            <button onClick={getUsers}>getUsers</button>
            {usersPage.users.map(user => {
                    return <div key={user.id} className={style.userContainer}>
                        <div className={style.avatarBlock}>
                            <div><img
                                src={user.photos.small ? user.photos.small : 'https://sun6-22.userapi.com/s/v1/if1/lisZ84X2jtluYVwToJ2AiBd_9roDLRNxPSiS6D1ZruvmfCO2NUgGOVgzEDaie6qkziWlaA.jpg?size=1272x1287&quality=96&crop=57,22,1272,1287&ava=1'}
                                alt="ava" className={style.userAva}/></div>
                            <button onClick={() => changeFollow(user.id)}>{user.followed ? 'Follow' : 'UnFollow'}</button>
                        </div>
                        <div className={style.userInfoBlock}>
                            <div className={style.userInfoBlockElements}>
                                <div>{user.name }</div>
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
