import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCg1JOc5EO9p0DHoOfEcDxf0rpH3jmrd9o",
  authDomain: "crwn-clothing-56902.firebaseapp.com",
  projectId: "crwn-clothing-56902",
  storageBucket: "crwn-clothing-56902.appspot.com",
  messagingSenderId: "648466177510",
  appId: "1:648466177510:web:365cd99f23934c9fe50a27",
  measurementId: "G-XQSR7JGN7Q"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;