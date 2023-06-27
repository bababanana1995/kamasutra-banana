import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts'
import ProfileInfo from "./Profile_info/Profile_info";
import {StateType} from "../Redux/State";

type ProfileType={
    stateProfile:StateType
    addPosts:()=>void
    updateNewPostText:(NewText:string)=>void

}
export const Profile = (props:ProfileType) => {
    return <div className={s.main_content}>
                <ProfileInfo/>
            <div className={s.block_Info_Nav}>
            <MyPosts updateNewPostText={props.updateNewPostText} addPosts={props.addPosts} stateProfile={props.stateProfile}/>
            </div>
        </div>
}
