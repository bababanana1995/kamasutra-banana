import React from 'react'
import s from './Profile.module.css'
import {SuperMyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../Redux/reducers/profile-Reducer";
import ProfileInfo from "./Profile_info/Profile_info";

type ProfilePropsType = {
    profile:ProfileType
}
export const Profile = (props: ProfilePropsType) => {
    return <div className={s.main_content}>
        <ProfileInfo profile={props.profile}/>
        <div className={s.block_Info_Nav}>
            <SuperMyPostsContainer />
            {/*<PhotosBlock/>*/}
        </div>
    </div>
}
