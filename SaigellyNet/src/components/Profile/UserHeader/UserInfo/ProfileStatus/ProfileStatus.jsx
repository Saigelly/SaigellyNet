import React from "react";
import s from "./ProfileStatus.module.css"


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.profileStatus
    }
    activeEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deactiveEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.putProfileStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.target.value,
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.profileStatus !== this.props.profileStatus) {
            this.setState({
                status: this.props.profileStatus
            })
        }
    }
    render = () => {
        return (
            <div className={s.status}>
                {!this.state.editMode &&
                    <span onDoubleClick={this.activeEditMode} className={s.spanStatus}>
                        {this.props.profileStatus || "Без статуса"}
                    </span>}
                {this.state.editMode &&
                    <input
                        onChange={this.onStatusChange}
                        onBlur={this.deactiveEditMode}
                        autoFocus={true}
                        className={s.inputStatus}
                        value={this.state.status} />
                }
            </div>

        )
    }
}

export default ProfileStatus;