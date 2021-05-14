import React, { useState } from 'react';
import './ChatFooter.css';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from '../../../axios'

const ChatFooter = () => {

    const [input, setInput] = useState("")

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new', {
            message: input,
            name: 'Demo name',
            timestamp: 'just now',
            received: true
        })

        setInput("")

    }

    return (
        <div className="chat__footer">
            <InsertEmoticonIcon />
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message" />
                <button onClick={sendMessage} type="submit">Send a message</button>
            </form>
            <MicIcon />
        </div>
    );
};

export default ChatFooter;