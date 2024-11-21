import { connect } from "react-redux";
import { onAddMessageClickCreator, onNewMessageTextUpdateCreator } from "../../../Redux/dialoguesReducer";
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
            dispatch(onAddMessageClickCreator());
        },
        onMessageChange: (text) => {
            dispatch(onNewMessageTextUpdateCreator(text));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)
export default MessagesContainer;