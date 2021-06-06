// rfce - shortcut for getting component

import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
    <div className="sidebar">
        <div className="sidebar_header">
            <Avatar/>
            <div className="sidebar_headerRight">
                <IconButton>
                    <DonutLarge></DonutLarge>
                </IconButton>
                <IconButton>
                    <Chat></Chat>
                </IconButton>
                <IconButton>
                    <MoreVert></MoreVert>
                </IconButton>
            </div>
        </div>

        <div className="sidebar_search">
            <div className="sidebar_searchContainer">
                <SearchOutlined></SearchOutlined>
                <input placeholder="Search" type="text"/>
            </div>
        </div>

        <div className="sidebar_chats">
<<<<<<< HEAD
            <SidebarChat addNewChat/>
=======
            <SidebarChat />
>>>>>>> 1f276bf00c13cd12e5d3bc80fb3fbb2a3892dc0c
            <SidebarChat />
            <SidebarChat />
        </div>
    </div>
    )
};

export default Sidebar;