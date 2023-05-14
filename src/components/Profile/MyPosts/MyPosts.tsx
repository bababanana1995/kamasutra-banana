import React from 'react'
import s from './MyPosts.module.css'
import Post from './MyPost/Post'

const MyPosts = () => {
    let postData = [
        {id: 1, name: 'Danya', post: 'i am here', likes: 10},
        {id: 3, name: 'Toma', post: 'i am been here', likes: 50},
        {id: 2, name: 'Dima', post: 'i am not here', likes: 20},

    ]

    const PostsElement = postData.map( post =><Post name={post.name} message={post.post} like={post.likes}/> )

    return (
        <div>
        <div className={s.position_posts}>
            <div className={s.post_h}><h1>My post</h1></div>
            <textarea className={s.pole_vvoda}></textarea>
            <button className={s.knopka}>Жмяк и всё</button>
        </div>
            {PostsElement}
        </div>

)
}
export default MyPosts
