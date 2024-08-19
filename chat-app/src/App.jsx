import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './components/list/List';
import Chat from './components/chat/Chat';
import Detail from './components/details/Detail';
// import Login from './components/login/Login';
import Notification from './components/notif/Notification';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from './lib/firebase';
// import { useUserStore } from './lib/userStore';

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) return <div className='loading'>Loading...</div>;

  return (
    <Router>
      <div className='container'>
        <Routes>
          {currentUser ? (
            <>
              <Route path="/" element={<><List /><Chat /><Detail /></>} />
              <Route path="/chat" element={<Chat />} />
            </>
          ) : (
            <Route path="/" element={<Login />} />
          )}
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
        <Notification />
      </div>
    </Router>
  );
};

export default App;
