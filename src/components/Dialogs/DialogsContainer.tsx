import {AddMessageAC, UpdateNewMessageTextAC} from "../Redux/reducers/messageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../Redux/storeRedux";

type DialogsType={
}

let mapStateToProps = (state:AppRootStateType) => {
    return {
    state:state.MessagePage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        onChangeText: (messageText:string) => {
                        dispatch(UpdateNewMessageTextAC(messageText))
        },
        onAddMessage: () => {
                        dispatch(AddMessageAC())
        }
    }
}
export const SuperDialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs)

