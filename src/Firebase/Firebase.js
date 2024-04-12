// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBeuTTSZMaJS2at4W67-24ScRjoESTZnwc",
    authDomain: "grade-test-419211.firebaseapp.com",
    projectId: "grade-test-419211",
    storageBucket: "grade-test-419211.appspot.com",
    messagingSenderId: "111056746863",
    appId: "1:111056746863:web:eb398032aef5cb1730909a",
    measurementId: "G-HK2V8WC53G"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
export default firebaseApp;