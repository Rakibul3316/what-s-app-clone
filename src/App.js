import './App.css';
import Chat from './Components/Chat/Chat';
import Sidebar from './Components/SidebarCompo/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
