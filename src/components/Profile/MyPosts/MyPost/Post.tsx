import React from 'react'
import s from './Post.module.css'

const Post = (props:any) => {
    return (
        <div className={s.post}>
            <div><img className={s.ava_cicle}
                      src='https://amiel.club/uploads/posts/2022-03/1647748258_34-amiel-club-p-multyashnie-kartinki-na-avatarku-35.jpg'></img>
            </div>
            <div className={s.post_text}>
                <div>Age {props.name}</div>
                <div>{props.message}</div>
                <div>Like's {props.like}</div>

            </div>
        </div>
    )
}
export default Post
