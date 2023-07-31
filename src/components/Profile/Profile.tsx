import React from 'react'
import s from './Profile.module.css'
import ProfileInfo from "./Profile_info/Profile_info";
import {SuperMyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfileType = {}
export const Profile = (props: ProfileType) => {
    return <div className={s.main_content}>
        <ProfileInfo/>
        <div className={s.block_Info_Nav}>
            <SuperMyPostsContainer />
        </div>
    </div>
}
