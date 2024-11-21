import { connect } from "react-redux";
import Chats from "./Chats"

const mapStateToProps = (state) => {
    return {
        chats: state.dialoguesReducer.chats,
    }
} 

const ChatsContainer = connect(mapStateToProps)(Chats)

export default ChatsContainer;