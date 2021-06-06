<<<<<<< HEAD
import { useState, useEffect } from 'react';
=======
>>>>>>> 1f276bf00c13cd12e5d3bc80fb3fbb2a3892dc0c
import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

<<<<<<< HEAD
const  SidebarChat = ({addNewChat}) =>  {
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
                <h2>Room name</h2>
                <div>Last Message</div>
            </div>
        </div>
    ) : 
    (
        <div onClick={createChat} className="sidebarChat"> 
            <h2>Add New Chat</h2>
        </div>
    );
=======
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
>>>>>>> 1f276bf00c13cd12e5d3bc80fb3fbb2a3892dc0c
}

export default SidebarChat;