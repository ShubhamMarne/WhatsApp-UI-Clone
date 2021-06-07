import { fireEvent } from '@testing-library/dom';
import firebase from 'firebase';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeDhoXNEarmKmQTpwpPrz4ihGllb0wOjs",
    authDomain: "whatsapp-2caca.firebaseapp.com",
    projectId: "whatsapp-2caca",
    storageBucket: "whatsapp-2caca.appspot.com",
    messagingSenderId: "524320584246",
    appId: "1:524320584246:web:8e5e1891a16590e0bcde97",
    measurementId: "G-F5TVXNMHH9"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;