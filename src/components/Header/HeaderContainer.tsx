import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserAC} from "../Redux/reducers/auth-Reducer";
import {AppRootStateType} from "../Redux/storeRedux";

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    this.props.setAuthUserAC(id, email, login)
                    console.log(res)
                }
            })
    }
    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}
type MapDispatchToProps = {
    setAuthUserAC: (id: number, email: string, login: string) => void
}
type MapStateToPropsType = {
    userId: number
    email: string
    login: string
    isAuth: boolean
}
type PropsType = MapStateToPropsType & MapDispatchToProps
const MapStateToProps = (state: AppRootStateType) => ({
    userId: state.Auth.userId,
    email: state.Auth.email,
    login: state.Auth.login,
    isAuth: state.Auth.isAuth,
})
//@ts-ignore
export default connect<MapStateToPropsType, MapDispatchToProps, AppRootStateType>(MapStateToProps, {setAuthUserAC})(HeaderContainer)
