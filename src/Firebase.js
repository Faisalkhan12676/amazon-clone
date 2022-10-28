
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = initializeApp({ 
  apiKey: "AIzaSyBKqhmDk75_2u50aZKQ043LAgUDslyHIJg",
  authDomain: "clone-b596f.firebaseapp.com",
  projectId: "clone-b596f",
  storageBucket: "clone-b596f.appspot.com",
  messagingSenderId: "561104170207",
  appId: "1:561104170207:web:6b1125568bb316353f8d6a"
});

const db = getFirestore();
export {db};
