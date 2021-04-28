import React from 'react';
import './SidebarChats.css'
import SidebarChat from '../SidebarChat/SidebarChat';

const SidebarChats = () => {
    return (
        <div className="sidebar__chats">
            <div className="sidebar__chatsTitel">
                <h2>Add new chat</h2>
            </div>
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
    );
};

export default SidebarChats;