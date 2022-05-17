// Esto lo da Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const apiKey=process.env.APIKEY;
const authDomain=process.env.AUTHDOMAIN;
const projectId=process.env.PROJECTID;
const storageBucket=process.env.STORAGEBUCKET;
const messagingSenderId=process.env.MESSAGINGSENDERID;
const appId=process.env.APPID;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export {auth};