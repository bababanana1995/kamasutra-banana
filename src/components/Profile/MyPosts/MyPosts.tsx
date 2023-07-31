import React, {ChangeEvent} from 'react'
import s from './MyPosts.module.css'
import Post from './MyPost/Post'
import {PostDataType} from "../../Redux/reducers/postReducer";

type MyPostsType = {
    addPost: () => void
    onChangeUpdateNewPostTExt: (text: string) => void
    posts: PostDataType[]
    NewPostText: string
}
export const MyPosts = (props: MyPostsType) => {
    const addPostButtonHandler = () => {
        props.addPost()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeUpdateNewPostTExt(e.currentTarget.value)
    }
    const PostsElement = props.posts
        .map(post => <Post key={post.id} name={post.name} message={post.post} like={post.likes}/>)
    return <div className={s.position_posts}>
        <div className={s.post_h}><h1>My post</h1></div>
        <div className={s.position}>

            <input onChange={onChangeHandler} value={props.NewPostText} type="text"/>
            <button onClick={addPostButtonHandler} className={s.knopka}>Жмяк</button>
        </div>
        {PostsElement}
    </div>

}
export default MyPosts
