import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAGx0iWD6QOvHm9-F6Rj6-rYnT9NAoBO5o",
  authDomain: "book-rack-7872e.firebaseapp.com",
  projectId: "book-rack-7872e",
  storageBucket: "book-rack-7872e.firebasestorage.app",
  messagingSenderId: "891821930246",
  appId: "1:891821930246:web:0fa8f83e47369e72619087"
};

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export const FirebaseProvider = (props) =>{
  const signUserwithEmailandPassword = (email,password)=> createUserWithEmailAndPassword(firebaseAuth,email,password);
    return(
        <FirebaseContext.Provider value={{signUserwithEmailandPassword}}>
            {props.children}
        </FirebaseContext.Provider>
    );
};

