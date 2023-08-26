import React from 'react'
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../Redux/reducers/profile-Reducer";

type ProfileInfoType = {
    profile:ProfileType
}
const ProfileInfo = (props:ProfileInfoType) => {
    const {profile}=props
    return (

        <div className={s.ava_text}>
            <div className={s.position_ava}>
                <img className={s.ava}
                     src={profile.photos.small.length!==0? profile.photos.large:'https://amiel.club/uploads/posts/2022-03/1647748258_34-amiel-club-p-multyashnie-kartinki-na-avatarku-35.jpg'}></img>
            </div>
            <div className={s.position_text}>
                <p className={s.Name}>Name: {profile.fullName.length !==0? profile.fullName: 'Алиса Донаван'} </p>
                <p className={s.info}>Age: 25 лет, город Москва</p>
            </div>
        </div>


    )
}
export default ProfileInfo
