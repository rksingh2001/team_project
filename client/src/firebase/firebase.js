import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "team-project-11.firebaseapp.com",
  databaseURL: "https://team-project-11-default-rtdb.firebaseio.com",
  projectId: "team-project-11",
  storageBucket: "team-project-11.appspot.com",
  messagingSenderId: "4356558927",
  appId: "1:4356558927:web:6d16816625464ab089da3a",
  measurementId: "G-B7M8GEVZ6P"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);