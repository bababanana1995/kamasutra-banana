import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.ava_text}>
            <div className={s.position_ava}>
                <img className={s.ava}
                     src='https://amiel.club/uploads/posts/2022-03/1647748258_34-amiel-club-p-multyashnie-kartinki-na-avatarku-35.jpg'></img>
            </div>
            <div className={s.position_text}>
                <p className={s.Name}>Name: Алиса Донаван</p>
                <p className={s.info}>Age: 25 лет, город Москва</p>
            </div>
        </div>


    )
}
export default ProfileInfo
