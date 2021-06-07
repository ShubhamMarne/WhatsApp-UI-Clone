import {useState , useEffect} from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import React from 'react'
import './Chat.css';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';

const Chat = () => {
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);


    const sendMessage = (event) => {
        event.preventDefault();
        setInput('');
    };

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />


                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>last seen at 3:30pm</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined>

                        </SearchOutlined>
                    </IconButton>

                    <IconButton>
                        <AttachFile>

                        </AttachFile>
                    </IconButton>

                    <IconButton>
                        <MoreVert>

                        </MoreVert>
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                <p className={`chat_message ${true && 'chat_receiver'}`}>
                    <span className="chat_name">John Mask</span>
                    Hey Guys
                    <span className="chat_timestamp">
                        3:20 pm
                    </span>
                </p>
            </div>

            <div className="chat_footer">
                <InsertEmoticon />
                <form>
                    <input placeholder="Type a message" type="text" onChange={(event) => {setInput(event.target.value)}}></input>
                    <button onclick={sendMessage} type="submit">Send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    );
}

export default Chat;