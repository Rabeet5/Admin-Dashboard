// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT5-cv4RcL_NMtmV1dLgQW0LaJRUQ3rAo",
  authDomain: "fir-authentication-a4047.firebaseapp.com",
  databaseURL: "https://fir-authentication-a4047-default-rtdb.firebaseio.com",
  projectId: "fir-authentication-a4047",
  storageBucket: "fir-authentication-a4047.appspot.com",
  messagingSenderId: "688896409316",
  appId: "1:688896409316:web:f03df114732d924d58f6f1",
  measurementId: "G-PX9MZ15YL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;