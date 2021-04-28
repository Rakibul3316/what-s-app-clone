import React from 'react';
import './ChatFooter.css';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

const ChatFooter = () => {
    return (
        <div className="chat__footer">
            <InsertEmoticonIcon />
            <form>
                <input type="text" placeholder="Type a message" />
                <button type="submit">Send a message</button>
            </form>
            <MicIcon />
        </div>
    );
};

export default ChatFooter;