import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css'

const SidebarChat = () => {
    return (
        <div className="sidebar__chat">
            <Avatar />
            <div className="sidebar__chatInfo">
                <h2>Room name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    );
};

export default SidebarChat;