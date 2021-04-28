import React from 'react'
import ChatBody from '../ChatBody/ChatBody'
import ChatFooter from '../ChatFooter/ChatFooter'
import ChatHeader from '../ChatHeader/ChatHeader'
import './Chat.css'


function Chat() {
    return (
        <div className="chat">
            <ChatHeader />
            <ChatBody />
            <ChatFooter />
        </div>
    )
}

export default Chat
