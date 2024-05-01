import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDK5OzPymm9IV2fYcY_y-crIjT8GzpCiaQ",
  authDomain: "authentication-form-72363.firebaseapp.com",
  databaseURL: "https://authentication-form-72363-default-rtdb.firebaseio.com",
  projectId: "authentication-form-72363",
  storageBucket: "authentication-form-72363.appspot.com",
  messagingSenderId: "577163626202",
  appId: "1:577163626202:web:88a36032f41530b90a47e3",
  measurementId: "G-PBRWZGXER3"
};
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
