import React from 'react'
import ChatBody from '../ChatBody/ChatBody'
import ChatFooter from '../ChatFooter/ChatFooter'
import ChatHeader from '../ChatHeader/ChatHeader'
import './Chat.css'


function Chat({ messages }) {
    return (
        <div className="chat">
            <ChatHeader />
            <ChatBody messages={messages} />
            <ChatFooter />
        </div>
    )
}

export default Chat
