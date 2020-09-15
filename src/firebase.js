import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC7qur8CG9Z6YR5tvHhKspchW_718ruKz0',
  authDomain: 'react-slack-clone-12a0d.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-12a0d.firebaseio.com',
  projectId: 'react-slack-clone-12a0d',
  storageBucket: 'react-slack-clone-12a0d.appspot.com',
  messagingSenderId: '312194657967',
  appId: '1:312194657967:web:2ee707586d3b55af872e5a',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider);
}