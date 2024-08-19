import { useState, useEffect } from 'react';

const useUserStore = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserInfo = (uid) => {
    // Simulate fetching user data
    setIsLoading(true);
    setTimeout(() => {
      // Fake user data fetch
      setCurrentUser({ uid, name: 'John Doe' });
      setIsLoading(false);
    }, 1000);
  };

  return { currentUser, isLoading, fetchUserInfo };
};

export default useUserStore;
