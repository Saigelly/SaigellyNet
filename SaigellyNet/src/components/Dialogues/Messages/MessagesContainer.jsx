import { connect } from "react-redux";
import { onAddMessageClick, onNewMessageTextUpdate } from "../../../Redux/dialoguesReducer";
import Messages from "./Messages";

const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialoguesReducer.newMessageText,
        messages: state.dialoguesReducer.messages
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: () => {
            dispatch(onAddMessageClick());
        },
        onMessageChange: (text) => {
            dispatch(onNewMessageTextUpdate(text));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)
export default MessagesContainer;