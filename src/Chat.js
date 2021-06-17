import {useState , useEffect} from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import React from 'react'
import './Chat.css';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import { useParams } from 'react-router-dom';
import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase';

const Chat = () => {
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');
    const {roomId} = useParams(); 
    const[roomName, setRoomName] = useState('');
    const [messages, setMessages] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name);
            });

            db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc')
            .onSnapshot(
                snapshot => {
                    setMessages(snapshot.docs.map(doc => doc.data()));
                }
            );
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);


    const sendMessage = (event) => {
        event.preventDefault();

        db.collection('rooms').doc(roomId).collection('messages').add({
            message : input,
            user : user.displayName,
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput('');
    };

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />


                <div className="chat_headerInfo">
                    <h3>{roomName}</h3>
                    <p>last seen {" "}
                        {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}
                    </p>
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
                {messages.map((message) => (
                    <p className={`chat_message ${message.user === user.displayName && 'chat_receiver'}`}>
                    <span className="chat_name">{message.name}</span>
                    {message.message}
                    {console.log("Message name "+ message.name)}
                    {console.log("Display name "+ user.displayName)}    
                    <span className="chat_timestamp">
                        {new Date(message.timestamp?.toDate()).toUTCString()}
                    </span>
                </p>
                ))}
            </div>

            <div className="chat_footer">
                <InsertEmoticon />
                <form>
                    <input placeholder="Type a message" type="text" value={input} onChange={(event) => {setInput(event.target.value)}}></input>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    );
}

export default Chat;