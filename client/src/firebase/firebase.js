import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCZdz-SLUnTXV51Lg8pTnz4YjX8301oNpY",
  authDomain: "test-test-1ed66.firebaseapp.com",
  projectId: "test-test-1ed66",
  storageBucket: "test-test-1ed66.appspot.com",
  messagingSenderId: "1052009333460",
  appId: "1:1052009333460:web:ab7f9074cbc2a944057141"
};

firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();