import React from 'react';
import './ChatBody.css'

const ChatBody = ({ messages }) => {
    // console.log(messages[12].received)
    return (
        <div className="chat__body">
            {
                messages.map(message => (
                    <p className={`chat__message ${message.received && "chat__reciever"}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat_timestamp"> {message.timestamp} </span>
                    </p>
                ))
            }
        </div>
    );
};

export default ChatBody;