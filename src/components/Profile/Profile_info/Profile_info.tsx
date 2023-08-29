import React from 'react'
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../Redux/reducers/profile-Reducer";
import {Preloader} from "../../common/Preloader";

type ProfileInfoType = {
    profile:ProfileType
}
const ProfileInfo = (props:ProfileInfoType) => {
    const {profile}=props
    if(profile.fullName.length==0){
        return <Preloader/>
    }
    return (

        <div className={s.ava_text}>
            <div className={s.position_ava}>
                <img className={s.ava}
                     src={profile.photos.large}></img>
            </div>
            <div className={s.position_text}>
                <p className={s.Name}>Name: {profile.fullName.split(' ')[1]} </p>
                <p className={s.Name}>Surname: {profile.fullName.split(' ')[0]} </p>
                <p className={s.info}>Age: 25 лет, город Москва</p>
            </div>
        </div>


    )
}
export default ProfileInfo
