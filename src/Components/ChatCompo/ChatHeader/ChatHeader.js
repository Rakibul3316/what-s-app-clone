import React from 'react';
import './ChatHeader.css'
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ChatHeader = () => {
    return (
        <div className="chat__header">
            <Avatar />

            <div className="chat__headerInfo">
                <h3>Room name</h3>
                <p>Last seen at.....</p>
            </div>

            <div className="chat__headerRight">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default ChatHeader;