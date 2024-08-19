import { create } from 'zustand';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid) => {
    if (!uid) return;

    try {
      const userDoc = doc(db, 'users', uid);
      const userSnapshot = await getDoc(userDoc);
      const userData = userSnapshot.data();
      set({ currentUser: userData, isLoading: false });
    } catch (error) {
      console.error('Error fetching user info:', error);
      set({ isLoading: false });
    }
  },
}));

export { useUserStore };
