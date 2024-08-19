import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASTFz6AR0T08UuClIRA6m2G0GNyMR8zG0",
  authDomain: "chat-app-7c2ad.firebaseapp.com",
  projectId: "chat-app-7c2ad",
  storageBucket: "chat-app-7c2ad.appspot.com",
  messagingSenderId: "1018012381698",
  appId: "1:1018012381698:web:363b11a38570b2002bed1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Test Firebase authentication
const testAuth = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, "test@example.com", "password123");
    console.log('User signed in:', userCredential.user);
  } catch (error) {
    console.error('Error signing in:', error);
  }
};

// Test Firestore
const testFirestore = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "testCollection"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  } catch (error) {
    console.error('Error fetching Firestore documents:', error);
  }
};

// Test Storage
const testStorage = () => {
  try {
    const storageRef = ref(storage, 'test/path');
    console.log('Storage reference created:', storageRef);
  } catch (error) {
    console.error('Error creating storage reference:', error);
  }
};

// Execute tests
testAuth();
testFirestore();
testStorage();

