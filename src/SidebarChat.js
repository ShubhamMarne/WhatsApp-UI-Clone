import { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

const  SidebarChat = ({id, name, addNewChat}) =>  { 
    debugger;
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if(roomName){
            
        }
    }

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat_info">
                <h2>{name}</h2>
                <div>Last Message</div>
            </div>
        </div>
    ) : 
    (
        <div onClick={createChat} className="sidebarChat"> 
            <h2>Add New Chat</h2>
        </div>
    );
}

export default SidebarChat;