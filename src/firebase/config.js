import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBB2TH7_5tle1vz4FWS5UuNv-UhexNYEpA",
  authDomain: "do-my-cv.firebaseapp.com",
  projectId: "do-my-cv",
  storageBucket: "do-my-cv.appspot.com",
  messagingSenderId: "1075534494619",
  appId: "1:1075534494619:web:7eb6a8be6187da62f6ff3e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)