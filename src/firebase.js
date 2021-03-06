import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCXdas3BtmOzpgc9l8ucSQrKRQW_K92ikA",
    authDomain: "netflix-clone-5393f.firebaseapp.com",
    projectId: "netflix-clone-5393f",
    storageBucket: "netflix-clone-5393f.appspot.com",
    messagingSenderId: "231315787417",
    appId: "1:231315787417:web:2ecb7668e3f1e1dfc4f208",
    measurementId: "G-1KPMXVZ9F8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
