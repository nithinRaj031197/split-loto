import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC3Z_tXDYamKZa4APW0JezBgDAXJxy3c3g",
  authDomain: "split-loto.firebaseapp.com",
  projectId: "split-loto",
  storageBucket: "split-loto.appspot.com",
  messagingSenderId: "1099321731558",
  appId: "1:1099321731558:web:17ee124b92d86bbd458e27",
  measurementId: "G-7L9F3E8XLK",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
