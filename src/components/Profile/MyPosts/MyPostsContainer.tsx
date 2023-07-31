import React from 'react'
import {AddPostAC, updateNewPostTextAC} from "../../Redux/reducers/postReducer";
import {connect} from "react-redux";
import myPosts from "./MyPosts";
import {AppRootStateType} from "../../Redux/storeRedux";

// type MyPostsContainerType = {}
let mapStateToProps = (state:AppRootStateType) => {
    return {
        posts: state.ProfilePage.PostData,
        NewPostText: state.ProfilePage.NewPostText
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(AddPostAC())
        },
        onChangeUpdateNewPostTExt: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}
export const SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(myPosts)
