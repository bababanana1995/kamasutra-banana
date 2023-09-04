import React from 'react'
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../Redux/storeRedux";
import {ProfileType, setUserProfileAC} from "../Redux/reducers/profile-Reducer";
import {RouteComponentProps,withRouter} from "react-router-dom";
// import {RouteComponentProps} from 'react-router'

// type ProfileContainerType = {
//     setUserProfile:(profile:any)=>void
//     profile:any
// }

type PathParamsType = {
    userId:string
}
type MapStatePropsType = {
    profile:ProfileType
}
type MapDispatchPropsType = {
    setUserProfile:(profile:ProfileType)=>void
}
type ownPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & ownPropsType
class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId='2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
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
let WitchUrlDataContainerComponent =withRouter<PropsType,any>(ProfileContainer)

// @ts-ignore
export default connect(mapStateToProps, {setUserProfile:setUserProfileAC})(WitchUrlDataContainerComponent)
