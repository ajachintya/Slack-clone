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
export const firestore = firebase.firestore();

export const signInWithGoogle = () => {
    //initilise google provider
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    //ask user to select gmail ccount in a new popup window
    auth.signInWithPopup(googleProvider);
};

export const signOut = () => {
  auth.signOut();
}

export const createOrGetUserProfileDocument = async(user) => {
  if (!user) {
    return;
  }

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;

    try {
      const user = {
        display_name: displayName,
        email,
        photo_url: photoURL,
        created_at: new Date(),
      };
      await userRef.set(user);
    } catch (error) {
      console.log('error', error);
    }
  }

  return getUserProfileDocument(user.uid);
}

async function getUserProfileDocument(uid) {
  if (!uid) return null;
  try {
    const userDocument = await firestore.collection('user').doc(uid);
    return userDocument;
  } catch (error) {
    console.log('error', error);
}

}