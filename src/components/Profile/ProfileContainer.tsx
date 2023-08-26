import React from 'react'
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../Redux/storeRedux";
import {ProfileType, setUserProfileAC} from "../Redux/reducers/profile-Reducer";

// type ProfileContainerType = {
//     setUserProfile:(profile:any)=>void
//     profile:any
// }
type MapStatePropsType = {
    profile:ProfileType
}
type MapDispatchPropsType = {
    setUserProfile:(profile:ProfileType)=>void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(res => {
                console.log(res.data)
                this.props.setUserProfile(res.data)
            })
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

let mapStateToProps = (state: AppRootStateType):MapStatePropsType => ({
    profile:state.ProfilePage.profile
})

// @ts-ignore
export default connect(mapStateToProps, {setUserProfile:setUserProfileAC})(ProfileContainer)
