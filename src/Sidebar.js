// rfce - shortcut for getting component

import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import React from 'react';
import {useState, useEffect} from 'react';
import './Sidebar.css';
import db from './firebase';

const Sidebar = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => {
            setRooms(snapshot.docs.map(
                doc => ({
                    id :doc.id,
                    data : doc.data()
                })
            ));
        });
    }, [])

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
            <SidebarChat addNewChat/>
            {rooms.map(room => (
              <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
            ))}
        </div>
    </div>
    )
};

export default Sidebar;