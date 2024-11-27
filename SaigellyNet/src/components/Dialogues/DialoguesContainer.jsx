import { compose } from "redux";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { onAddMessageClick, onNewMessageTextUpdate } from "../../Redux/dialoguesReducer";
import Dialogues from "./Dialogues";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        chats: state.dialoguesReducer.chats,
        newMessageText: state.dialoguesReducer.newMessageText,
        messages: state.dialoguesReducer.messages,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { onAddMessageClick, onNewMessageTextUpdate })
)(Dialogues)