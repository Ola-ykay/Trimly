import { initializeApp } from "firebase/app";
// import firebase from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// import  AppleSignInAuth  from 'apple-signin-auth';
const firebaseConfig = {
  apiKey: "AIzaSyDBI81-fXXHyV-Pz2bAnpBrI71r2C47W_4",
  authDomain: "capstone-project-381ec.firebaseapp.com",
  projectId: "capstone-project-381ec",
  storageBucket: "capstone-project-381ec.appspot.com",
  messagingSenderId: "942908162687",
  appId: "1:942908162687:web:a795eb5ad2deb044b8b54a",
  measurementId: "G-CFKS6BTW4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// const appleProvider = new AppleSignInAuth('apple.com');
// const firestore = firebase.firestore();
//  const db = app.firestore();

export {auth, googleProvider};
export default app;