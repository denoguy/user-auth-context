import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7KwBE6TzRYJKtpfqF_Ij_vZ15_7iGKVs",
  authDomain: "user-auth-context.firebaseapp.com",
  databaseURL: "https://user-auth-context.firebaseio.com",
  projectId: "user-auth-context",
  storageBucket: "user-auth-context.appspot.com",
  messagingSenderId: "187861321820",
  appId: "1:187861321820:web:0dfe20620a6b3c42e6fe99",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//accesing auth

const auth = firebaseApp.auth();
//accesing provider
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
