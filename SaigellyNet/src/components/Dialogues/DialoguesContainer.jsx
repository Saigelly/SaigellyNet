import { compose } from "redux";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { onAddMessageClick } from "../../Redux/dialoguesReducer";
import Dialogues from "./Dialogues";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        chats: state.dialoguesReducer.chats,
        messages: state.dialoguesReducer.messages,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { onAddMessageClick })
)(Dialogues)