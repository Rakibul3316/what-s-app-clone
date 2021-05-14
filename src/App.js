import { useEffect, useState } from 'react';
import './App.css';
import Pusher from 'pusher-js'
import axios from './axios'
import Chat from './Components/ChatCompo/Chat/Chat';
import Sidebar from './Components/SidebarCompo/Sidebar/Sidebar';


function App() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data)
      })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('1d744d3dbe10540ea6eb', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', (newMessages) => {
      setMessages([...messages, newMessages])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages])

  console.log('messages :>> ', messages);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
