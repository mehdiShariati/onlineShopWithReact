import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config={
    apiKey: "AIzaSyCL7t2QBsIOT5UQDcj1GauQpgdtwq_58JI",
    authDomain: "onlineshop-9b22d.firebaseapp.com",
    databaseURL: "https://onlineshop-9b22d.firebaseio.com",
    projectId: "onlineshop-9b22d",
    storageBucket: "onlineshop-9b22d.appspot.com",
    messagingSenderId: "1043553902044",
    appId: "1:1043553902044:web:c6d0e229c94b16cdbd4319"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
  
  const provider=new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
  export default firebase;