import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

const  SidebarChat = () =>  {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat_info">
                <h1>Room name</h1>
                <h1>Last Message</h1>
            </div>
        </div>
    )
}

export default SidebarChat;