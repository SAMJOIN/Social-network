import React, { useState } from "react"

const ProfileStatus = (props) => {

    // Локальный state
    // state = {
    //     editMode: false,
    //     status: this.props.status
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         });
    //     }
    // }

    // activateEditMode = () => {
    //     this.setState({
    //         editMode: true,
    //     })
    // }

    // deactivateEditMode = () => {
    //     this.setState({
    //         editMode: false,

    //     });

    //     this.props.updateStatus(this.state.status);
    // }

    

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {editMode &&
                <div>
                    <span>Status:</span>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={`${status || ''}`}></input>
                </div>
            }

            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{'Status: ' + `${status || ''}`}</span>
                </div>  
            }
        </div>
    )
}

export default ProfileStatus;