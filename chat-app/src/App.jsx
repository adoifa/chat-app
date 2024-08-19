import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './components/list/List';
import Chat from './components/chat/Chat';
import Detail from './components/details/Detail';
import Notification from './components/notif/Notification';
 
const App = () => {

  return (
    <Router>
      <div className='container'>
        <Routes>
        <Route path="/" element={<><List /><Chat /><Detail /></>} />
        </Routes>
        <Notification />
      </div>
    </Router>
  );
};

export default App;
