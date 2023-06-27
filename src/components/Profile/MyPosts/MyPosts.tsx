import React, {ChangeEvent, useState} from 'react'
import s from './MyPosts.module.css'
import Post from './MyPost/Post'
import {StateType} from "../../Redux/State";

type MyPostsType = {
    stateProfile: StateType
    addPosts: () => void
    updateNewPostText: (NewText: string) => void

}
export const MyPosts = (props: MyPostsType) => {
    let statePost = React.createRef<HTMLTextAreaElement>()
    const addPostButtonHandler = () => {
            props.addPosts()
    }
    const onChangeHandler = () => {
        let NewText = statePost.current?.value
       NewText && props.updateNewPostText(NewText)
    }
    const PostsElement = props.stateProfile.ProfilePage.PostData
        .map(post => <Post key={post.id} name={post.name} message={post.post} like={post.likes}/>)
    return <div className={s.position_posts}>
        <div className={s.post_h}><h1>My post</h1></div>
        <div className={s.position}>
            <textarea onChange={onChangeHandler} ref={statePost} className={s.pole_vvoda}></textarea>
            <button onClick={addPostButtonHandler} className={s.knopka}>Жмяк</button>
        </div>
        {PostsElement}
    </div>

}
export default MyPosts
