import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './components/chat/Chat';
import ChatList from './components/chatlist/ChatList';
 
const App = () => {

  return (
    <Router>
      <div className='container'>
        <Routes>
        <Route path="/" element={<> <ChatList /> <Chat /></>} />
        </Routes>
      </div> 
     
    </Router>
  );
};

export default App;
