import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGKe_i7aF6wULhsRZITpUPiivRviZSPGI",
  authDomain: "prodms-833ab.firebaseapp.com",
  projectId: "prodms-833ab",
  storageBucket: "prodms-833ab.appspot.com",
  messagingSenderId: "374709358898",
  appId: "1:374709358898:web:fb901809dd419b9e1dc72b",
  measurementId: "G-6NPSKD2FK1",
};

// initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// Setup authentication service
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
